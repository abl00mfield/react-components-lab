import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";
import WeatherData from "../WeatherData/WeatherData.jsx";

const WeatherForecast = ({ forecast }) => {
    return (
        <div className="weather">
            <h2>{forecast.day}</h2>
            <WeatherIcon img={forecast.img} alt={forecast.imgAlt} />
            <WeatherData conditions={forecast.conditions} time={forecast.time} />
           
        </div>
    )
} 

export default WeatherForecast;