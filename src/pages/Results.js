import React from "react";
import axios from 'axios';
import '../App.css';
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import WeatherResults from "../components/WeatherResults";
// import WeatherForm from "../components/WeatherForm";

// console.log(process.env.REACT_APP_APPID)
// const {REACT_APP_APPID} = process.env
export default function Results(props) {
    
    const [params] = useSearchParams();
    const searchQuery = params.get("query");
    const [weatherData, setWeatherData] = useState({})
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${process.env.REACT_APP_APPID}&units=imperial`
    // get weather data
  const getWeather = () => {
    
  
    axios.get(url)
      .then(response => {
        setWeatherData(response.data);
        
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
      
  };
  useEffect(()=>{getWeather()},[])
  
  
    return (
        
      <div>
        {/* <h1>Results</h1> */}
        <h1>City Weather Data for <br /> {searchQuery}</h1>
        <WeatherResults weatherData={weatherData}/>
  
        
      </div>
    );
  }

