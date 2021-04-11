import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo (props){
    return (<div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li><FormatedDate date= {props.data.date}/> </li>
            <li className="text-capitalize"> {props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src={props.data.icon} alt={props.data.description} className="float-left" />
              <div className="float-left">
                  <WeatherTemperature celcius ={props.data.temperature}/>
              </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Pressure:{props.data.pressure} hPa</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind speed: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
        </div>;
        </div>);
}