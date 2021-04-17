import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
   function handleResponse(response){
console.log(response.data);
   }

let apiKey = "11b09ae39e1971203074e458432047c9";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric` 
axios.get(apiUrl).then(handleResponse);

   return (<div className="WeatherForecast">
        <div className="row">
        <div className="col">
           <div className="WeatherForecast-day">Thu</div>
           <WeatherIcon code="01d" size={52} animate={false}/>
           <div className="WeatherForecast-temperatures">
             <span className="WeatherForecast-temp-max">19°</span>
             <span className="WeatherForecast-temp-min">10°</span>
           </div>
        </div>
        </div>
          </div>);
}