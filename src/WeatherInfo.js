import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";



export default function WeatherInfo (props){
    return (<div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li><FormatedDate date= {props.data.date}/>
            </li>
            <li className="text-capitalize"> {props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                   <div className="float-left">
                  <WeatherIcon code={props.data.icon} size={52} animate={true}/></div> 
                  <WeatherTemperature celcius ={props.data.temperature}/>
              </div>
            </div>
            
            <div className="col-6">
                <ul className="WeatherDetails">
                    <li>Pressure:{props.data.pressure} hPa</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind speed: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
            </div>
        </div>
        );
}