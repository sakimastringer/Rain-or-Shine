import React from "react"
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
  // console.log(weatherData)
  console.log(process.env.REACT_APP_APPID)
    return (
        
      <div>
        {/* <h1>Results</h1> */}
        <h1>Results for {searchQuery}</h1>
      {/* <div className="Data">
        <p>{weatherData.city}</p>
        <p>{weatherData.main.temp}</p>
        <p>{weatherData.weather.description}</p>
        <p>{weatherData.weather.icon}</p>
        <p>{weatherData.main.humidity}</p>
        <p>{weatherData}</p>
        


      </div>
         {/* <Link to={`/results/${exampleResults}`}>{exampleResults}</Link>
        <br /> */}
        {/* <Link to="/">Search for more info</Link>  */} 
      </div>
    );
  }

