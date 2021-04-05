import React from "react";
import "./Weather.css";

export default function Weather(){
    return (<div className="Weather">
        
           
        <form><div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control"/></div>
           <div className="col-3"> <input type="submit" value="Submit" className="btn btn-primary"/>
            <input type="submit" value="Back to current" className="btn btn-success"/></div>
       </div> </form>
       
        <h1>Warsaw</h1>
        <ul>
            <li> Monday 10:30</li>
            <li> Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" />
                10°C|°F
            </div>
            <div className="col-6">
                <ul>
                    <li>Percipitation: 2%</li>
                    <li>Humidity: 40%</li>
                    <li>Wind speed: 24 km/h</li>
                </ul>
            </div>
        </div>
    </div>)
}