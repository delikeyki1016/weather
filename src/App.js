import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 나의 위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨 상태의 정보가 있다.
// 3. 5개의 도시 버튼이 있다. 각 도시버튼을 클릭할 때마다 도시 별 날씨가 나온다.
// 4. current location 버튼이 있다. 이 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 5. 데이터를 들고오는 동안 로딩스피너가 동작함

function App() {
    const API_KEY = "171b5991e72f90b757a5ceee3cb82495";
    const [weather, setWeather] = useState(null);
    const cities = ["Hanoi", "New york", "Paris", "Phuket"];
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    // 현재 위치 구하기 함수
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log("position", position);
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            // console.log(lat, lon);
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    // 현재 위치 날씨 api 가져오기
    const getWeatherByCurrentLocation = async (lat, lon) => {
        // &units=metric => 섭씨 사용
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setWeather(data);
        setLoading(false);
    };

    // 도시이름으로 api 가져오기
    const getWeatherByCityName = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setWeather(data);
        setLoading(false);
    };

    useEffect(() => {
        if (city === "") {
            // console.log("city?", city);
            getCurrentLocation();
        } else {
            // console.log("city?", city);
            getWeatherByCityName();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);

    return (
        <div className="bg">
            {loading ? (
                <ClipLoader
                    color="yellow"
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <>
                    <WeatherBox weather={weather} />
                    <WeatherButton
                        cities={cities}
                        setCity={setCity}
                        city={city}
                    />
                </>
            )}
        </div>
    );
}

export default App;
