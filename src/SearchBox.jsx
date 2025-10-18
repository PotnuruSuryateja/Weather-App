import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox({updateWeather}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ff8fb9acc4d92f704d30518528c8d292";

    let getWeatherInfo = async() =>{
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            let result = {
                city : city,
                temp : jsonRes.main.temp,
                tempMin : jsonRes.main.temp_min,
                tempMax : jsonRes.main.temp_max,
                feelsLike : jsonRes.main.feels_like,
                weather : jsonRes.weather[0].description,
                humidity : jsonRes.main.humidity
            } ;
            console.log(result);
            return result;
        }catch(err){
            throw(err);
        }
    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            let newInfo = await getWeatherInfo();
            updateWeather(newInfo);
            setError(false);
            setCity("");
        }catch(err){
            setError(true);
        }

    }

    return (
        <div className='searchBox'>
            <h5>Search for the Weather</h5>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="outlined" type="submit">Search</Button>
                {error&&<p style={{color:"red"}}>No city found</p>}
            </form>
        </div>
    )
}