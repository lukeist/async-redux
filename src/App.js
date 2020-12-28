import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=112550880a224d7c95b224425202712&q=";
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("London");
  useEffect(() => {
    axios
      .get(url + input)
      .then((data) => {
        setWeather(data.data);
        // console.log(weather);
      })
      .catch((err) => console.log(err));
  });
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      {weather && (
        <div>
          <div className="weather-info">
            <input onChange={weatherInput} type="text" />
            <button onClick={searchWeather}>Search</button>
          </div>
          <h1>
            {weather.location.name}, {weather.location.region}
          </h1>
          <h2>{weather.location.country}</h2>
          <div className="condition">
            <h3>{weather.current.condition.text}</h3>
            <img src={weather.current.condition.icon} alt="current condition" />
            <h3>{weather.current.temp_c} Celsius</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
