import { useState } from "react";
import './App.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router";
// import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const WeatherForm = ({ cityName, setCityName, getWeather, }) => (

    const searchBar = () => {
        const [searchInput, setSearchInput] = useState("");
        const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        };
        if (searchInput = { cityName }) {
            cityName.filter((cityName => {
                return city.name.match(searchInput);
            }))
        }
    }
    return (
        <div>
            <input
                type="search"
                placeholder="Enter city here"
                onChange={handleChange}
                value={cityName} />
            <table>
                <tr>
                    <th>city Name</th>

                </tr>

                {cityName.map((cityName, * index *) => {

                    <div>
                        <tr>
                            <td>{city.name}</td>
                        </tr>
                    </div>

                })
            </table>

        </div>
    )
})
export default WeatherForm;