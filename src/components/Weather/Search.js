import { useState } from "react"
import axios from "axios"
import _ from "lodash" // to use to clone object
import { useHistory } from "react-router-dom"

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const [locationArr, setLocationArr] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [isFocusInput, setIsFocusInput] = useState(false)

    let history = useHistory()

    const handleSearchBtn = async () => {
        setIsLoadingData(true)
        setLocationArr([]) // mỗi lần search, đầu vào array bằng rỗng

        await axios({ // delete: let response = 
            method: "post",
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` }, //template string
        }).then(response => { // .then để giải quyết việc bất đồng bộ.
            if (response && response.data) {
                let result = response.data
                let _locationArr = []

                if (!_.isEmpty(result)) { //not empty
                    for (let key in result) {
                        _locationArr.push(result[key])
                    }
                    setLocationArr(_locationArr)
                }
                else { // empty
                    setLocationArr([])
                }
            }
        }).then(() => {

            setTimeout(() => {
                setIsLoadingData(false)
            }, 1000)
        })

        setIsFocusInput(false)
    }

    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`) // Để lấy tham số trên đường link này để gọi API
    }

    return (
        <div className="search-weather-container">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder="Search any city..."
                    value={keyword} // Để kiểm soát giá trị keyword
                    onChange={(event) => setKeyword(event.target.value)}
                    onFocus={() => setIsFocusInput(true)} // Nên dùng arrow function để tránh bị lỗi.
                />
                <button onClick={() => handleSearchBtn()}> Search </button>
            </div>

            {isLoadingData === true
                ?
                <div style={{ padding: "15px" }}>Loading data ...</div>
                :
                <div className="result-container">
                    {locationArr && locationArr.length > 0 && locationArr.map((item, index) => {
                        return (
                            <div className="result-child" key={`location - ${index}`}>
                                <div className="title">Title: {item.title}</div>
                                <div className="type">Type: {item.location_type}</div>
                                <div className="woeid">
                                    <span onClick={() => handleViewDetail(item.woeid)}
                                        title="Click to view detail" // đưa chuột vào sẽ hiển thị thông tin này
                                    >
                                        <b>Woeid: {item.woeid}</b>
                                    </span></div>
                                <div className="latt_long">Latt_long: {item.latt_long}</div>
                            </div>
                        )
                    })}

                    {
                        !isFocusInput && keyword && locationArr && locationArr.length === 0 &&
                        <div>Not found data with keyword = {keyword}</div>
                    }

                </div>
            }
        </div>
    )
}
export default Search


