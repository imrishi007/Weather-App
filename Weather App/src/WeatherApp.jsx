import React, { useState } from "react";
import "./WeatherApp.css";


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: "",
        windSpeed: "",
        temperature: "",
        location: ""
    });

    const apikey = "366db09b39d5e8a7d4104e81df7fb85b";

    const [wicon,setWicon] = useState()

    const search = async () => {
        const cityInput = document.querySelector(".cityInput");
        if (!cityInput.value) {
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apikey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: data.main.temp,
            location: data.name
        });
        
        if (data.weather[0].main === "Clear"){
            setWicon("./clear.png");
        }
        else if (data.weather[0].main === "Smoke"){
            setWicon("./cloud.png");
        }
        else if (data.weather[0].main === "Drizzle"){
            setWicon("./drizzle.png");
        }
        else if (data.weather[0].main === "Drizzle"){
            setWicon("./drizzle.png");
        }
        else if(data.weather[0].main === "Rain"){
            setWicon("./rain.png");
        }
        else if(data.weather[0].main === "Snow"){
            setWicon("./snow.png");
        }
    };

    return (
        <div>
            <div className="title">
                <h1>WEATHER</h1>
            </div>
            <div className="title">
                <h2>FIND TEMPERATURE IN ONE CLICK 😄</h2>
            </div>
            <div className="container">
                <div className="top-bar">
                    <input type="text" className="cityInput" placeholder="Search" />
                    <div className="search-icon" onClick={search}>
                        <img src="./search.png" alt="" />
                    </div>
                </div>
                <div className="weather-image">
                    <img src="./cloud.png" alt="" />
                </div>
                <div className="weather-temp">{weatherData.temperature}°C</div>
                <div className="weather-location">{weatherData.location}</div>
                <div className="data-container">
                    <div className="element">
                        <img src="./humidity.png" alt="" className="icon" />
                        <div className="data">
                            <div className="humidity-percent">{weatherData.humidity}%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src="./wind.png" alt="" className="icon" />
                        <div className="data">
                            <div className="wind-rate">{weatherData.windSpeed}km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;