import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  

  return (
    <div className="App">
      <div className="container">
        <SearchBar city={(city) => setCity(city)} />
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;
