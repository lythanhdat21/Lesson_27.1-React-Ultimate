import './Child.scss'

const WeatherState = (props) => {
    const weatherState = props.weatherState
    const allWeatherState = {
        "Snow": "sn",
        "Thunderstorm": "t",
        "Heavy Cloud": "hc",
        "Light Cloud": "lc",
        "Clear": "c"
    }

    const getWeatherIcon = (weatherState) => {
        const fetchState = allWeatherState[weatherState]
        return `http://localhost:8080/static/img/weather/${fetchState}.svg`;
    }

    return(
        <div className = "weather-state-container"> 
            <div className="icon-state">
                <img src = {getWeatherIcon(weatherState)}/>
            </div>
            <div className = "name-state">
                {weatherState}
            </div>
        </div>
    )
}
export default WeatherState

