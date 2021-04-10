import React, {useState} from "react";
import FormatedDate from "./FormatedDate";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
   const [weatherSpecyfic, setWeatherSpecyfic] = useState({ready:false});
    function handleResponse(response){
        
        setWeatherSpecyfic({
            ready:true,
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp),
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            icon: response.data.weather[0].icon,
            date:new Date(response.data.dt * 1000),
        })
        
    }

if (weatherSpecyfic.ready){return (<div className="Weather">
        <form><div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
           <div className="col-3"> <input type="submit" value="Submit" className="btn btn-primary w-100"/>
            <input type="submit" value="Back to current" className="btn btn-success w-100"/></div>
       </div> </form>
        <h1>{weatherSpecyfic.city}</h1>
        <ul>
            <li><FormatedDate date= {weatherSpecyfic.date}/> </li>
            <li className="text-capitalize"> {weatherSpecyfic.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src={weatherSpecyfic.icon} alt={weatherSpecyfic.description} className="float-left" />
              <div className="float-left">
               <span className="temp">{weatherSpecyfic.temperature}</span> 
               <span className="units"> °C|°F</span></div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Pressure:{weatherSpecyfic.pressure} hPa</li>
                    <li>Humidity: {weatherSpecyfic.humidity}%</li>
                    <li>Wind speed: {Math.round(weatherSpecyfic.wind)} km/h</li>
                </ul>
            </div>
        </div>
    </div>
   );
}
    
    
    else {

    const apiKey="11b09ae39e1971203074e458432047c9";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
return "Loading.."}
  
}