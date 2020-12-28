import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";

function App() {
  // const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=`;
  // const [weather, setWeather] = useState(null);
  // const [input, setInput] = useState("London");
  // useEffect(() => {
  //   axios
  //     .get(url + input)
  //     .then((data) => {
  //       setWeather(data.data);
  //       // console.log(weather);
  //     })
  //     .catch((err) => console.log(err));
  // });
  // const weatherInput = (e) => {
  //   setInput(e.target.value);
  // };
  // const searchWeather = (e) => {
  //   setInput(e.target.value);
  // };
  // // const [counter, setCounter] = useState(0);
  const counter = useSelector((state) => state.counter);
  const signedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* {weather && (
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
      )} */}
      <div>
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          // onClick=
          // {() => setCounter((prev) => prev + 1)}
        >
          Increment
        </button>

        <Nav />
        <button onClick={() => dispatch({ type: "SIGN_IN" })}>Sign In</button>
        {signedIn && <h1>MovieList</h1>}
      </div>
    </div>
  );
}

export default App;
