// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Import Dependencies
import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Pages
import Home from "./pages/Home";
import Results from "./pages/Results";
import WeatherForm from "./components/WeatherForm";

export default function App() {
  const [city, setCity] = useState("")
 
  const [weatherData, setWeatherData] = useState({})
  const [data, setData] = useState({})
  
  

  // //get weather data
  // const getWeather = () => {
    
  
  //   axios.get(url)
  //     .then(response => {
  //       setWeatherData(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching weather data:", error);
  //     });
  // };
  // const getWeather = (onSubmit) =>{
  //   if (onSubmit.url == "input") {
  //     //fecth data from URL
  //     fetch(url).then(
  //       //import response into projects.json
  //       response => response.json()
  //     ).then(
  //       data => {
  //         setWeatherData(data)
  //       }
  //     )
  //   } 
  // }


  return (
    
    <BrowserRouter>
    <div className="App">
      <>
    

        <Navbar bg="light" variant="light">
          <Container className="con">
          
            <Navbar.Brand href="#home">Weather or Not</Navbar.Brand>
            <Nav className="meauto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/results">Results</Nav.Link>
            </Nav>
            
          </Container>
        </Navbar>
      </>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/search" element={<Search URL={URL} />} /> */}
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </div>
      <div>
      
        <WeatherForm city={city} setCity={setCity} />
      </div>
      
    </div>
    </BrowserRouter>
  );
}


