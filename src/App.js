import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherButton from "./component/WeatherButton";
import { useState, useEffect } from "react";
import WeatherBox from "./component/WeatherBox";

// 1. 앱이 실행되자마자 나의 위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨 상태의 정보가 있다.
// 3. 5개의 도시 버튼이 있다. 각 도시버튼을 클릭할 때마다 도시 별 날씨가 나온다.
// 4. current location 버튼이 있다. 이 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 5. 데이터를 들고오는 동안 로딩스피너가 동작함

function App() {
    const [weather, setWeather] = useState(null);
    // 현재 위치 구하기 함수
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat, lon);

            getWeatherByCurrentLocation(lat, lon);
        });
    };

    // 현재 위치 날씨 api 가져오기
    const getWeatherByCurrentLocation = async (lat, lon) => {
        // &units=metric => 섭씨 사용
        const API_KEY = "171b5991e72f90b757a5ceee3cb82495";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setWeather(data);
    };

    //

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div className="bg">
            <WeatherBox weather={weather} />
            <WeatherButton />
        </div>
    );
}

export default App;
