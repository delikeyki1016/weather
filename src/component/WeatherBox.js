import React from "react";

const WeatherBox = ({ weather }) => {
    console.log(weather);
    return (
        <div className="box">
            <h1 className="title">현재 위치: {weather && weather.name}</h1>
            <ul>
                <li>현재날씨: {weather?.weather[0].description}</li>
                <li>현재온도 섭씨: {weather?.main.temp}</li>
                <li>
                    현재온도 화씨:
                    {weather && Math.round(weather.main.temp * (9 / 5) + 32)}
                </li>
            </ul>
        </div>
    );
};

export default WeatherBox;
