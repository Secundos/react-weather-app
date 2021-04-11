import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
   const [weatherSpecyfic, setWeatherSpecyfic] = useState({ready:false});
   const [city, setCity]= useState(props.defaultCity);
   const[location, setLocation]=useState({})
    function handleResponse(response){
        
        setWeatherSpecyfic({
            ready:true,
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp),
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date:new Date(response.data.dt * 1000),
        });
    }
    function search(){
const apiKey="11b09ae39e1971203074e458432047c9";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
}
    function handleSubmit(event){
    event.preventDefault();
   search();
}
    function handleCityChange(event){
setCity(event.target.value);
}

function showPosition(event){
    event.preventDefault();
navigator.geolocation.getCurrentPosition(currentLocationWeather);

}

function currentLocationWeather(position){
     let lat = position.coords.latitude;
    let lon= position.coords.longitude;
const apiKey="11b09ae39e1971203074e458432047c9";
let apiUrl= `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

}


if (weatherSpecyfic.ready){return (
<div className="Weather">
        <form onSubmit={handleSubmit}><div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/></div>
           <div className="col-3"> <input type="submit" value="Submit" className="btn btn-primary w-100"/>
            <input type="submit" value="Back to current" className="btn btn-success w-100" onClick={showPosition}/></div>
       </div> </form>
       <WeatherInfo data={weatherSpecyfic}/>
        
    </div>
   );
}
    else {
      search()
    return "Loading.."}
}