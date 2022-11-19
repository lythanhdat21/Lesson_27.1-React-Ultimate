import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import './Weather.scss'
import WeatherByLocation from "./WeatherByLocation";

const Weather = () => {
    const [title, setTitle] = useState("")

    useEffect(async () => {

        let response = await axios({
            method: "post",
            url: "http://localhost:8080/get-data-by-url",
            data: { url: "https://www.metaweather.com/api/location/1236594/" },
        })

        setTimeout(() => {
            setTitle(response.data.title)
        }, 1000)
    }, []) // Nếu không có dấu [] thì nó sẽ chạy vô hạn

    return (
        <div className="Weather-app-container">
            <Search />
            <hr />
            <WeatherByLocation
                woeidFromParent={"1236594"}
            />

            <hr />

            <WeatherByLocation
                woeidFromParent={"1252431"}
            />

        </div>
    )
}
export default Weather


// class Weather extends React.Component {

//     constructor(props) {
//         super(props)
//         console.log(">>> run constructor: 000")
//         this.state = {
//             title: ""
//         }
//     }

//     async componentDidMount() {
//         console.log(">>> run didmount")
//         let response = await axios({
//             method: "post",
//             url: "http://localhost:8080/get-data-by-url",
//             data: { url: "https://www.metaweather.com/api/location/1236594/" },
//         })

//         setTimeout(() => {
//             this.setState({
//                 title: response.data.title
//             })
//         }, 3000)
//     }

//     render() {
//         console.log(">>> run render: ")
//         return (
//             <div>inside weather components: title = {this.state.title}</div>
//         )
//     }
// }
// export default Weather

