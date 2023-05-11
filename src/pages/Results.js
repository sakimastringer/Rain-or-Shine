import React from "react"
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export default function Results(props) {
    
    // const [params] = useSearchParams();
    // const searchQuery = params.get("query");
    // const [exampleResults, setExampleResults] = useState("Yolo");
    // params => custome variable to return params object
    // params object several methods -> get (return a search for a key )
  
    // console.log("params object", params);
    // console.log("location", searchQuery);
  
    /**  setting results state,*/
  
    /**  useEffect for handling API query ,etc ,*/
  
    /**  loading / loaded and conditional JSX below ,*/
  
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

