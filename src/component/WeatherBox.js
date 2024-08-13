import React from "react";

const WeatherBox = ({ weather }) => {
    return (
        <div className="box">
            <h1 className="title">
                현재 위치: <strong>{weather && weather.name}</strong>
            </h1>
            <ul>
                <li>
                    현재날씨: <strong>{weather?.weather[0].description}</strong>
                </li>
                <li>
                    현재온도: <strong>{weather?.main.temp}</strong>°C &#47;{" "}
                    <strong>
                        {weather &&
                            Math.round(weather.main.temp * (9 / 5) + 32)}
                    </strong>
                    °F
                </li>
            </ul>
        </div>
    );
};

export default WeatherBox;
