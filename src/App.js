import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Warsaw"/>
     <footer>This app was coded by{" "}< a href="https://www.linkedin.com/in/emilia-kuci%C4%99ba-a497761ba/" target="_blank" rel="noreferrer">Emilia Kucięba</a>  and it's open-soursed {" "} <a href ="https://github.com/Secundos/react-weather-app" target="_blank" rel="noreferrer">on GitHub </a>
      </footer> 
    </div>
    </div>
  );
}
 
