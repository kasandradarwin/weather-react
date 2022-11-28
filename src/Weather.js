import React from "react";
import "./App.css";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';


export default function Weather(){
    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 48,
        animate: true
      };

  let weatherData = {
    city: "Nanaimo", 
    date: "10 Minutes Ago",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    humidity: "20%",
    wind: "2 kph",
    temp: "19°C"
  }
  return(
  <div> 
    <div className="container">
            <div className="weather-app-wrapper">
              <div className="weather-app">
                <form id="search-form" className="mb-3">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="search"
                        placeholder="Type a city.."
                        className="form-control"
                        autocomplete="off"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary w-100"
                      />
                    </div>
                  </div>
                </form>
                <div className="overview">
                
                  <ul>
                    <li><h1 id="city"> {weatherData.city} </h1></li>
                    <br />
                    <li>Last updated: {weatherData.date}</li>
                    <li>{weatherData.description}</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="clearfix weather-temperature">
                    <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
  />
                    {/* <Icons description="CLEAR_DAY" colour="goldenrod" /> */}

                      {/* <img src={weatherData.imgUrl} alt={weatherData.description} id="icon" className="float-left"/> */}
                      <div className="float-left">
                        <span className="units"><strong>{weatherData.temp}</strong
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>{weatherData.humidity}</li>
                      <li>{weatherData.wind}</li>
                    </ul>
                  </div>
                </div>
                <div className="weather-forecast" id="forecast"></div>
                </div>
        <small>
          <a
            href="https://github.com/kasandradarwin/weather-react"
            target="_blank"
            rel="noreferrer"
            >Open-source code </a
          >
            by Kasandra D
        </small>
      </div>
    </div>
    <script src="src/app.js"></script>
    </div>
)}
