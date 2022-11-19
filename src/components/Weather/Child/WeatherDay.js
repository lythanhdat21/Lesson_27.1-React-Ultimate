import WeatherState from "./WeatherState";
import './Child.scss'
import moment from "moment/moment";

const WeatherDay = (props) => {

    const dataWeather = props.dataWeather

    return (
        <div className="weather-day-container">

            <div className="date">{moment(dataWeather.applicable_date).format("DD MM YYYY")}</div>

            <div className="state">
                <WeatherState
                    weatherState={dataWeather.weather_state_name}
                />
            </div>
            <div className="max">
                Max: {Math.round(dataWeather.max_temp)}°C
            </div>
            <div className="min">
                Min: {Math.round(dataWeather.min_temp)}°C
            </div>
            <div className="wind">
                <span className={`dir dir-${dataWeather.wind_direction_compass.toLowerCase()}`}></span>
                {Math.round(dataWeather.wind_speed)}mph
            </div>
        </div>
    )
}
export default WeatherDay


