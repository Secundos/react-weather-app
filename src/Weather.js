import React from "react";
import "./Weather.css";

export default function Weather(){
    return (<div className="Weather">
        <form><div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
           <div className="col-3"> <input type="submit" value="Submit" className="btn btn-primary w-100"/>
            <input type="submit" value="Back to current" className="btn btn-success w-100"/></div>
       </div> </form>
       
        <h1>Warsaw</h1>
        <ul>
            <li> Monday 10:30</li>
            <li> Sunny</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" className="float-left" />
              <div className="float-left">
               <span className="temp">10</span> 
               <span className="units"> C|°F</span>°</div>
            </div>
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