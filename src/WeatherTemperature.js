import React, {useState} from "react";

export default function WeatherTemperature(props){
    const[unit,setUnit]= useState('celcius');

    function conwertToFahrenheit(event){
        event.preventDefault();
        setUnit('fahrenheit');
    }

function conwertToCelcius(event){
    event.preventDefault();
    setUnit('celcius');
}


    if(unit==='celcius'){
   return (<div className="WeatherTemperature"> 
            <span className="temp">{props.celcius}</span> 
            <span className="units"> 
            °C | <a href="/" onClick={conwertToFahrenheit}>°F</a>
            </span>
            </div>
            );
        }

  else {
      return (<div className="FahrenheitTemperature">
          <div className="WeatherTemperature"> 
            <span className="temp">{Math.round((props.celcius *9/5)+32)}</span> 
            <span className="units"> 
             <a href="/" onClick={conwertToCelcius} > °C</a>|°F
            </span>
            </div>
      </div>)
      
  }
}