import React, { useEffect, useState } from "react";
import Axios from "axios";

const API_KEY = "dce781b2f988c11ca536248397a31ff2";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const icons = {
  Mist: "wi wi-windy",
  Thunderstorm: "wi wi-day-thunderstorm",
  Drizzle: "wi wi-day-rain",
  Rain: "wi wi-day-sprinkle",
  Snow: "wi wi-day-snow",
  Atmosphere: "wi wi-day-snow",
  Clear: "wi wi-day-sunny",
  Clouds: "wi wi-day-cloudy",
};

function Weather({ city }) {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    Axios.get(`${API_URL}${city}&appid=${API_KEY}&lang=fr&units=metric`)
      .then((res) => {
        document.body.className = res.data.weather[0].main.toLowerCase();
        setWeather({
          description: res.data.weather[0].description,
          main: res.data.weather[0].main,
          icon: res.data.weather[0].icon,
          temp: res.data.main.temp,
          name: res.data.name,
        });
      })
      .catch((err) => console.log(err));
  }, [city]);

  console.log(weather.main, "MAIN");
  console.log(city === "", "city");

  return (
    <div className="weather">
      {weather.name && (
        <>
          <h2 className="title is-1">{weather.name}</h2>
          <i id="wi" className={icons[weather.main].toLowerCase()}></i>
          <h3>
            {weather.temp && (
              <span className="is-size-2"> {Math.round(weather.temp)}°C</span>
            )}
            <span className="is-size-2 is-capitalized">
              ({weather.description}){" "}
            </span>
          </h3>
        </>
      )}
    </div>
  );
}

export default Weather;
