import React from "react";
import { useState } from "react";
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router";
import { data, weatherData, getWeather } from '../pages/Results.js';


export default function WeatherForm({ weatherData }) {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const query = input;
      navigate(`/results?query=${query}`);
      setInput("");
    };

    console.log(weatherData)
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
      </>
  )
}