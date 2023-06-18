import React from 'react';
import { TextField, Button, FormLabel, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Box } from '@material-ui/core';
import axios from 'axios';
const MyComponent = ({ setModel }) => {
    const [gender, setGender] = React.useState(0);
    const [course, setCourse] = React.useState(1);
    const [religion, setReligion] = React.useState(1);
    const [reserveCat, setReserveCat] = React.useState(1);
    const [marks12, setMarks12] = React.useState(0);
    const [marks10, setMarks10] = React.useState(0);
    const [entranceScore, setEntranceScore] = React.useState(0);
    const [isPh, setIsPh] = React.useState(0);
    const [econBack, setEconBack] = React.useState(0);

    const onSubmit = async (fromData) => {
        axios.post(' http://127.0.0.1:8000/api/student-placement-predictor/', fromData)
            .then((response) => {

                console.log(response.data.prediction);
                document.getElementById("th").innerText = "threshold: " + response.data.prediction
                localStorage.setItem('model1', response.data.prediction)
            })
            .catch((error) => {
                // Handle error response
                console.error(error);
            });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            gender,
            course,
            religion,
            reserve_cat: reserveCat,
            marks_12: marks12,
            marks_10: marks10,
            entrance_score: entranceScore,
            is_ph: isPh,
            econ_back: econBack,
        };
        onSubmit(formData);
    };

    return (
        <Box style={{ display: 'flex', height: "100%", justifyContent: "center", flexShrink: 0, }}>

            <form onSubmit={handleFormSubmit}>
                <h1>Model 1 : Co-curricular activities </h1>
                <Box style={{ display: 'flex', flexDirection: 'column', width: "500px", marginTop: "20px", marginBottom: "50px" }}>
                    <FormControl style={{ marginBottom: "20px" }}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            value={gender}
                            onChange={(event) => setGender(parseInt(event.target.value))}
                        >
                            <MenuItem value={0}>Male</MenuItem>
                            <MenuItem value={1}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ marginBottom: "10px" }}>
                        <InputLabel>Course</InputLabel>
                        <Select
                            value={course}
                            onChange={(event) => setCourse(parseInt(event.target.value))}
                        >
                            <MenuItem value="1">CE</MenuItem>
                            <MenuItem value="2">CSE</MenuItem>
                            <MenuItem value="3">EE</MenuItem>
                            <MenuItem value="4">ECE</MenuItem>
                            <MenuItem value="5">IT</MenuItem>
                            <MenuItem value="6">MBA</MenuItem>
                            <MenuItem value="7">MCA</MenuItem>
                            <MenuItem value="8">BBA</MenuItem>
                            <MenuItem value="9">BCOM</MenuItem>
                            {/* Add more options for courses */}
                        </Select>
                    </FormControl>
                    <FormControl style={{ marginBottom: "10px" }}>
                        <InputLabel>Religion</InputLabel>
                        <Select
                            value={religion}
                            onChange={(event) => setReligion(parseInt(event.target.value))}
                        >
                            <MenuItem value={1}>Hindu</MenuItem>
                            <MenuItem value={2}>Muslim</MenuItem>
                            <MenuItem value={3}>christian</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl component="fieldset" style={{ marginBottom: "10px" }}>
                        <FormLabel>Reserved cat</FormLabel>

                        <RadioGroup
                            name="reserveCat"
                            value={reserveCat}
                            onChange={(event) => setReserveCat(parseInt(event.target.value))}
                        >
                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                            <FormControlLabel value={0} control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" style={{ marginBottom: "10px" }}>
                        <FormLabel>Economical background</FormLabel>
                        <RadioGroup
                            name="econBack"
                            value={econBack}
                            onChange={(event) => setEconBack(parseInt(event.target.value))}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                            <FormControlLabel value={0} control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" style={{ marginBottom: "10px" }}>
                        <FormLabel>Physically handicapped</FormLabel>

                        <RadioGroup
                            name="isPh"
                            value={isPh}
                            onChange={(event) => setIsPh(parseInt(event.target.value))}
                        >
                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                            <FormControlLabel value={0} control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        style={{ marginBottom: "10px" }}
                        label="12th Marks"
                        type="number"
                        value={marks12}
                        onChange={(event) => setMarks12(parseInt(event.target.value))}
                    />
                    <TextField
                        style={{ marginBottom: "10px" }}
                        label="10th Marks"
                        type="number"
                        value={marks10}
                        onChange={(event) => setMarks10(parseInt(event.target.value))}
                    />
                    <TextField
                        style={{ marginBottom: "10px" }}
                        label="Entrance Score"
                        type="number"
                        value={entranceScore}
                        onChange={(event) => setEntranceScore(parseInt(event.target.value))}
                    />

                    <Button variant="contained" style={{ marginBottom: "10px" }} color="secondary" type="submit">Submit</Button>
                    <span id="th"></span>
                    <Button variant="outlined" style={{ marginBottom: "10px" }} onClick={() => {
                        setModel(true)
                    }}>Model 2</Button>
                </Box>
            </form >
        </Box>
    );
};

export default MyComponent;
