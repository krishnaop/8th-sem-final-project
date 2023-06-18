import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@material-ui/core';
import axios from 'axios';


const Cocubes = ({ setModel }) => {
    const [branch, setBranch] = useState('');
    const [score, setScore] = useState(0);
    const [coding, setCoding] = useState(0);
    const [computerFundamental, setComputerFundamental] = useState(0);
    const [domain, setDomain] = useState(0);
    const [analytical, setAnalytical] = useState(0);
    const [quantitative, setQuantitative] = useState(0);
    const [english, setEnglish] = useState(0);
    const [aptitude, setAptitude] = useState(0);
    const [writtenEnglish, setWrittenEnglish] = useState(0);
    const [personality, setPersonality] = useState('');


    const callApi = async (fromData) => {
        axios.post(' http://127.0.0.1:8000/api/cocubes/', fromData)
            .then((response) => {

                let average = (Number(localStorage.getItem('model1')) + Number(response.data.trust)) / 2
                let per = average * 100
                document.getElementById('avg').innerText = "You have " + String(per).split('.')[0] + "% chance of getting a job";
            })
            .catch((error) => {
                // Handle error response
                console.error(error);
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            "Branch": branch,
            "Score out of 800": score,
            "Coding": coding,
            "Computer Fundamental": computerFundamental,
            "Domain": (domain),
            "Analytical": (analytical),
            "Quantitative": (quantitative),
            "English": (english),
            "Aptitude": (aptitude),
            "Written English": (writtenEnglish),
            "Personality": personality
        };
        callApi(formData)
    };

    return (
        <Box style={{ display: 'flex', height: "100%", justifyContent: "center", flexShrink: 0, }}>

            <form onSubmit={handleSubmit}>
                <h1>Model 2 : Cocubes </h1>
                <Box style={{ display: 'flex', flexDirection: 'column', width: "500px", marginTop: "20px", marginBottom: "50px" }}>
                    <FormControl>
                        <InputLabel>Branch</InputLabel>
                        <Select
                            value={branch}
                            onChange={(event) => setBranch(event.target.value)}
                        >
                            <MenuItem value="Electronics & Communication Engineering">Electronics & Communication Engineering</MenuItem>
                            <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
                            <MenuItem value="Computer Science Engineering">Computer Science Engineering</MenuItem>
                            <MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>

                        </Select>
                    </FormControl>
                    <TextField
                        label="Score out of 800"
                        type="number"
                        value={score}
                        onChange={(event) => setScore(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Coding"
                        type="number"
                        value={coding}
                        onChange={(event) => setCoding(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Computer fundamentals"
                        type="number"
                        value={computerFundamental}
                        onChange={(event) => setComputerFundamental(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Domain"
                        type="number"
                        value={domain}
                        onChange={(event) => setDomain(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Analytical"
                        type="number"
                        value={analytical}
                        onChange={(event) => setAnalytical(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Quantitative"
                        type="number"
                        value={quantitative}
                        onChange={(event) => setQuantitative(parseInt(event.target.value))}
                    />
                    <TextField
                        label="English"
                        type="number"
                        value={english}
                        onChange={(event) => setEnglish(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Aptitude"
                        type="number"
                        value={aptitude}
                        onChange={(event) => setAptitude(parseInt(event.target.value))}
                    />
                    <TextField
                        label="Written english"
                        type="number"
                        value={writtenEnglish}
                        onChange={(event) => setWrittenEnglish(parseInt(event.target.value))}
                    />
                    <FormControl>
                        <InputLabel>Personality</InputLabel>
                        <Select
                            value={personality}
                            onChange={(event) => setPersonality(event.target.value)}
                        >
                            <MenuItem value="OCEsT">OCEsT</MenuItem>
                            <MenuItem value="OCEAT">OCEAT</MenuItem>
                            <MenuItem value="UcEST">UcEST</MenuItem>
                            <MenuItem value="UDest">UDest</MenuItem>
                            <MenuItem value="UCEST">UCEST</MenuItem>
                            <MenuItem value="Ucest">Ucest</MenuItem>
                            <MenuItem value="UDISN">UDISN</MenuItem>
                            <MenuItem value="oCEST">oCEST</MenuItem>
                            <MenuItem value="OCEST">OCEST</MenuItem>
                            <MenuItem value="OcEAT">OcEAT</MenuItem>
                            <MenuItem value="UcEAT">UcEAT</MenuItem>
                            <MenuItem value="oCEaT">oCEaT</MenuItem>
                            <MenuItem value="UdEst">UdEst</MenuItem>
                            <MenuItem value="UCEAT">UCEAT</MenuItem>
                            <MenuItem value="oCEAT">oCEAT</MenuItem>
                            <MenuItem value="ocEAt">ocEAt</MenuItem>
                            <MenuItem value="UdEsT">UdEsT</MenuItem>
                            <MenuItem value="ODeSt">ODeSt</MenuItem>
                            <MenuItem value="UdEAT">UdEAT</MenuItem>
                            <MenuItem value="odesT">odesT</MenuItem>
                            <MenuItem value="UdeSt">UdeSt</MenuItem>
                            <MenuItem value="uCEST">uCEST</MenuItem>
                            <MenuItem value="uCEaT">uCEaT</MenuItem>
                            <MenuItem value="ODEST">ODEST</MenuItem>
                            <MenuItem value="UdEAt">UdEAt</MenuItem>
                            <MenuItem value="oCEsT">oCEsT</MenuItem>
                            <MenuItem value="ucEan">ucEan</MenuItem>
                            <MenuItem value="udiAT">udiAT</MenuItem>
                            <MenuItem value="UDIsN">UDIsN</MenuItem>
                            <MenuItem value="UdESt">UdESt</MenuItem>
                            <MenuItem value="UdEST">UdEST</MenuItem>
                            <MenuItem value="ocEAT">ocEAT</MenuItem>
                            <MenuItem value="UCEat">UCEat</MenuItem>
                            <MenuItem value="OCEaT">OCEaT</MenuItem>
                            <MenuItem value="UdeST">UdeST</MenuItem>
                            <MenuItem value="UcISN">UcISN</MenuItem>
                            <MenuItem value="UdISN">UdISN</MenuItem>
                            <MenuItem value="odEst">odEst</MenuItem>
                            <MenuItem value="uDEAT">uDEAT</MenuItem>
                            <MenuItem value="odEsT">odEsT</MenuItem>
                            <MenuItem value="uDISN">uDISN</MenuItem>
                            <MenuItem value="UDESt">UDESt</MenuItem>
                            <MenuItem value="UCEaT">UCEaT</MenuItem>
                            <MenuItem value="odEST">odEST</MenuItem>
                            <MenuItem value="UcEsT">UcEsT</MenuItem>
                            <MenuItem value="ucEAT">ucEAT</MenuItem>
                            <MenuItem value="UDiSt">UDiSt</MenuItem>
                            <MenuItem value="UdEAN">UdEAN</MenuItem>
                            <MenuItem value="UDEST">UDEST</MenuItem>
                            <MenuItem value="UdiSt">UdiSt</MenuItem>
                            <MenuItem value="uCeAT">uCeAT</MenuItem>
                            <MenuItem value="odEAT">odEAT</MenuItem>
                            <MenuItem value="oCESN">oCESN</MenuItem>
                            <MenuItem value="UDeST">UDeST</MenuItem>
                            <MenuItem value="uCESN">uCESN</MenuItem>
                            <MenuItem value="udeSN">udeSN</MenuItem>
                            <MenuItem value="ocESt">ocESt</MenuItem>
                            <MenuItem value="ucEat">ucEat</MenuItem>
                            <MenuItem value="OdeST">OdeST</MenuItem>
                            <MenuItem value="UCESt">UCESt</MenuItem>
                            <MenuItem value="oCEat">oCEat</MenuItem>
                            <MenuItem value="oCEAt">oCEAt</MenuItem>
                            <MenuItem value="UCEsT">UCEsT</MenuItem>
                            <MenuItem value="ocEST">ocEST</MenuItem>
                            <MenuItem value="UCEAt">UCEAt</MenuItem>
                            <MenuItem value="UCEan">UCEan</MenuItem>
                            <MenuItem value="oDEAn">oDEAn</MenuItem>
                            <MenuItem value="UDeSN">UDeSN</MenuItem>
                            <MenuItem value="UcEaT">UcEaT</MenuItem>
                            <MenuItem value="OdEAT">OdEAT</MenuItem>
                            <MenuItem value="UDeSt">UDeSt</MenuItem>
                            <MenuItem value="UDiST">UDiST</MenuItem>
                            <MenuItem value="UDISn">UDISn</MenuItem>
                            <MenuItem value="ucesn">ucesn</MenuItem>
                            <MenuItem value="UDEat">UDEat</MenuItem>
                            <MenuItem value="udEAT">udEAT</MenuItem>
                            <MenuItem value="udEST">udEST</MenuItem>
                            <MenuItem value="UCISN">UCISN</MenuItem>
                            <MenuItem value="ucEsN">ucEsN</MenuItem>
                            <MenuItem value="UdISt">UdISt</MenuItem>
                            <MenuItem value="UDeAN">UDeAN</MenuItem>
                            <MenuItem value="uDeSt">uDeSt</MenuItem>
                            <MenuItem value="UdiST">UdiST</MenuItem>
                            <MenuItem value="UDEsN">UDEsN</MenuItem>
                            <MenuItem value="UcEAt">UcEAt</MenuItem>
                            <MenuItem value="OcEsT">OcEsT</MenuItem>
                            <MenuItem value="OdEst">OdEst</MenuItem>
                            <MenuItem value="ucESt">ucESt</MenuItem>
                            <MenuItem value="UDESn">UDESn</MenuItem>
                            <MenuItem value="UDiSN">UDiSN</MenuItem>
                            <MenuItem value="ucEAt">ucEAt</MenuItem>
                            <MenuItem value="UceSn">UceSn</MenuItem>
                            <MenuItem value="UDISt">UDISt</MenuItem>
                            <MenuItem value="uCesT">uCesT</MenuItem>
                            <MenuItem value="udEAt">udEAt</MenuItem>
                            <MenuItem value="UDisN">UDisN</MenuItem>
                            <MenuItem value="UCEsn">UCEsn</MenuItem>
                            <MenuItem value="UcIST">UcIST</MenuItem>
                            <MenuItem value="UCISn">UCISn</MenuItem>
                            <MenuItem value="UDEaT">UDEaT</MenuItem>
                            <MenuItem value="UdESN">UdESN</MenuItem>
                            <MenuItem value="OdEaT">OdEaT</MenuItem>
                            <MenuItem value="UdeSN">UdeSN</MenuItem>
                            <MenuItem value="UDeSn">UDeSn</MenuItem>
                            <MenuItem value="odESN">odESN</MenuItem>
                            <MenuItem value="UdISn">UdISn</MenuItem>
                            <MenuItem value="oDiST">oDiST</MenuItem>
                            <MenuItem value="UDEAn">UDEAn</MenuItem>
                            <MenuItem value="UCeSt">UCeSt</MenuItem>
                            <MenuItem value="UcEat">UcEat</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="secondary" style={{ marginTop: "10px" }} type="submit">Submit</Button>
                    <span id="trustscore"></span>
                    <span id="avg"></span>
                    <Button variant="outlined" style={{ marginTop: "10px" }} onClick={() => {
                        setModel(false)
                    }}>Model 1</Button>
                </Box>
            </form>
        </Box>
    );
};

export default Cocubes;
