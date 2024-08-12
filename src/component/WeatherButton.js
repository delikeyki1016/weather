import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
    return (
        <div className="btnWrap">
            <Button variant="warning">Current Location</Button>
            <Button variant="warning">Hanoi</Button>
            <Button variant="warning">Newyork</Button>
            <Button variant="warning">Paris</Button>
            <Button variant="warning">Danang</Button>
        </div>
    );
};

export default WeatherButton;
