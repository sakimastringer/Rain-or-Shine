import React from "react";
import { useState } from "react";
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router";

export default function WeatherForm({city, setCity, setWeatherData}) {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const query = input;
      navigate(`/results?query=${query}`);
      setInput("");
    };


    return (
      
      <>
      <form onSubmit={handleSubmit}>
        {/* <p>Search Label</p> */}
        <input
          id="userInput"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter City "
          value={input}
          
        />
        <input type="submit" value="Search" />
      </form>
    <div>
      <Card className="bcard">
      <Card.Img variant="top" src="https://i.imgur.com/bdU4sds.jpg" />
      <Card.Body>
          <Card.Text>
              {           /* <p>Date</p>
                          {/* <p>Temp</p>
                          <p>Description</p>
                          <p>Humidity</p>
                          <p>Wind</p>
                          <p>Feels Like</p>
                          <p>Rain</p> */} 
          </Card.Text>
      </Card.Body>
      </Card>
      
      </div>
      </>
  )
}