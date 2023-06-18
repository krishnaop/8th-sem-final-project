from rest_framework import views
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import os


class PredictorView(views.APIView):
    def post(self, request):
        model = keras.models.load_model('predictor/models/aiect.h5')

        data = request.data
        gender = int(data['gender']) # 0 1
        course = int(data['course']) # 1-9
        religion = int(data['religion'])# 1-6
        reserve_cat = int(data['reserve_cat'])# 1-4
        marks_12 = int(data['marks_12'])
        marks_10 = int(data['marks_10'])
        entrance_score = int(data['entrance_score'])
        is_ph = int(data['is_ph'])# 1 0
        econ_back = int(data['econ_back'])# 1 0 
        features = np.array([[gender, course, religion, reserve_cat,
                              is_ph, econ_back, marks_12/100, marks_10/98, entrance_score]])
        prediction = model.predict(features)
        threshold = {'prediction': prediction[0][0]}
        

        return Response(threshold, status=status.HTTP_200_OK)


class CocubesView(views.APIView):
    dataframe = None
    input_features = None
    target_variable = None
    branch_encoder = None
    personality_encoder = None
    label_encoder = None
    data = None
    labels = None
    model = None
    def train_model(self,epc):

        self.dataframe = pd.read_excel('predictor/models/cocubes_data.xlsx')

        self.input_features = [
            "Branch", "Score out of 800", "Aptitude", "English", "Quantitative", "Analytical",
            "Domain", "Computer Fundamental", "Coding", "Written English",
            "Personality"
        ]

        self.target_variable = [
            "Analyst", "Customer Service Executive", "Graduate Engineer (Plant)",
            "Graduate Engineer (R&D)", "Network Engineer", "Operations Executive",
            "Sales Executive", "Software Developer", "Software Engineer",
            "Software Tester"
        ]

        self.branch_encoder = LabelEncoder()
        self.dataframe["Branch"] = self.branch_encoder.fit_transform(self.dataframe["Branch"])

        self.personality_encoder = LabelEncoder()
        self.dataframe["Personality"] = self.personality_encoder.fit_transform(self.dataframe["Personality"])

        for column in self.target_variable:
            self.label_encoder = LabelEncoder()
            self.dataframe[column] = self.label_encoder.fit_transform(self.dataframe[column])

        self.data = pd.get_dummies(self.dataframe[self.input_features]).values.astype(np.float32)
        self.labels = self.dataframe[self.target_variable].values.astype(np.int32)

        self.model = keras.Sequential([
            layers.Dense(64, activation='relu', input_shape=(self.data.shape[1],)),
            layers.Dense(len(self.target_variable), activation='softmax')
        ])

        self.model.compile(optimizer='adam',
                    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                    metrics=['accuracy'])

        history = self.model.fit(self.data, np.argmax(self.labels, axis=1), epochs=epc, verbose=0)
    def post(self, request):
        self.train_model(200)

        data = request.data
        print(data)
        input_data = pd.DataFrame(data, index=[0])
        input_data["Branch"] = self.branch_encoder.transform(input_data["Branch"])
        input_data["Personality"] = self.personality_encoder.transform(input_data["Personality"])
        input_data = pd.get_dummies(input_data[self.input_features]).values.astype(np.float32)
        prediction = self.model.predict(input_data)
        predicted_labels = np.argmax(prediction, axis=1)
        predicted_probabilities = np.max(prediction, axis=1)
        print(predicted_labels)
        predicted_job_roles = self.label_encoder.inverse_transform(predicted_labels)
        predicted_results = {}
        for i in range(len(predicted_job_roles)):
            predicted_results[predicted_job_roles[i]] = predicted_probabilities[i]
        data = {}
        for job_role, trust_score in predicted_results.items():
            print(job_role, trust_score)
            data["trust"] = trust_score
        return Response(data, status=status.HTTP_200_OK)