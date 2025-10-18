import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 28.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze"
    });

    let updateWeather = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h3 style={{textAlign:"center"}}>Weather Finder</h3>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}