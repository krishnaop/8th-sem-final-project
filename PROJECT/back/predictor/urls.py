from django.urls import path,include
from predictor import views
urlpatterns = [
    path('student-placement-predictor/',views.PredictorView.as_view(),name='predictor'),
    path('cocubes/',views.CocubesView().as_view(),name='cocube'),

]
