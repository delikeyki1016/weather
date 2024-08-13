import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, city }) => {
    // console.log("props cities", cities);
    return (
        <div className="btnWrap">
            <Button
                variant={`${city === "" ? "primary" : "warning"}`}
                onClick={() => setCity("")}
            >
                Current Location
            </Button>
            {cities.map((item, index) => (
                <Button
                    key={index}
                    variant={`${city === item ? "primary" : "warning"}`}
                    onClick={() => setCity(item)}
                >
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
