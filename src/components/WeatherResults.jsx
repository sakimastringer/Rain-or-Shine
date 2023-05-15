import './App.css';

export default function WeatherResults({ weatherData }) {
    console.log(weatherData)
    return weatherData.main ? (
        <div>
            <div className="temp">
                <h1>{Math.round(weatherData.main.temp)}°F</h1>
            </div>
            <div className="description">
                <h1>{weatherData.weather[0].description}</h1>
            </div>
            <div className="container">
                <div className="box">
                    <p>High/Low</p>
                    <h2>{Math.round(weatherData.main.temp_max)}°F/{Math.round(weatherData.main.temp_min)}°F</h2>
                </div>
                <div className="box">
                    <p>Feels Like</p>
                    <h2>{Math.round(weatherData.main.feels_like)}°F</h2>
                </div>
                <div className="box">
                    <p>Humidity</p>
                    <h2>{weatherData.main.humidity}%</h2>
                </div>
                <div className="box">
                    <p>Wind</p>
                    <h2>{Math.round(weatherData.wind.speed)}mph</h2>
                </div>
            </div>
        </div>
    ) : <div>loading</div>
}