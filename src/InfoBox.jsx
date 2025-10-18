import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    let INIT_URL = "https://media.istockphoto.com/id/477110708/photo/weather-forecast.jpg?s=612x612&w=0&k=20&c=plbIXX9mIs7G92x_HBc5KgbbHef5S-V130t9SqAabKI=";

    let hot_url = "https://img.goodfon.com/wallpaper/big/d/98/solnyshko-solnechnyy-den-nebo.webp";
    let cold_url = "https://www.abhibus.com/blog/wp-content/uploads/2023/12/Best-Places-to-Visit-in-Winter-in-India-You-Must-See.jpg";
    let rain_url = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";



    return (
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? rain_url : info.temp > 18 ? hot_url : cold_url
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;&nbsp;{
                        info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 18 ? <SunnyIcon/> : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Min.Temperature : {info.tempMin}&deg;C</p>
                        <p>Max.Temperature : {info.tempMax}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}