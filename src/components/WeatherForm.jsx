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
      <form className="search" onSubmit={handleSubmit}>
        {/* <p>City Weather Data</p> */}
        <input
          id="userInput"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter City "
          value={input}
          
        />
        <input className="input" type="submit" value="Search" />
      </form>
      
    <div className="description">
      <h1>Partly Cloudy</h1>

    </div>
    <div className="temp">
      <h1>70°F</h1>
    </div>
    <div className="container">
    <div className="box">
        <p>High/Low</p>
        <h2>72°F/62°F</h2>
      </div>
      <div className="box">
        <p>Feels Like</p>
        <h2>72°F</h2>
      </div>
      <div className="box">
        <p>Humidity</p>
        <h2>89%</h2>
      </div>
      <div className="box">
        <p>Wind</p>
        <h2>18 mph</h2>
      </div>
    </div>
      </>
  )
}