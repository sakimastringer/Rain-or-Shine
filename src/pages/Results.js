import React from "react"
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";


export default function Results(props) {
    
    const [params] = useSearchParams();
    const searchQuery = params.get("query");
    const [weatherData, setWeatherData] = useState({})
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=d9a6ec56c078b6f44d3a8201102b6fb5&units=imperial`
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
  console.log(weatherData)
    return (
        
      <div>
        <h1>Results</h1>
        {/* <h1>Results for {searchQuery}</h1> */}
  
        {/* <Link to={`/detail/${exampleResults}`}>{exampleResults}</Link> */}
        <br />
        {/* <Link to="/">Search for more info</Link> */}
      </div>
    );
  }

