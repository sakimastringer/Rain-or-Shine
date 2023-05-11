import { useState } from "react";
import './App.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router";
// import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

export default function WeatherForm({ cityName, setCityName, getWeather, }) {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // onHandleSubmit={getWeather};
        e.preventDefault();
        const query = input;
        navigate(`/results?query=${query}`);
        setInput("")
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input"
                    id="userInput"
                    onChange={(e) => setCityName(e.target.value)}
                    // placeholder="enter Search query "
                    value={cityName}
                    
                />
                <input type="submit" value="Search" />
            </form>
            <>
                <Card className="bcard">
                    <Card.Img variant="top" src="https://i.imgur.com/bdU4sds.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <p>Date</p>
                            <p>Temp</p>
                            <p>Description</p>
                            <p>Humidity</p>
                            <p>Wind</p>
                            <p>Feels Like</p>
                            <p>Rain</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                {/* <Card>
                    <Card.Body>
                        <Card.Text>
                          <p>testing 1,2</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card> */}
            </>
        </div>


    )

};