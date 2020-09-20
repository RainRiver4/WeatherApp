import React from "react";
import "./../../scss/Result.scss";

const Result = props => {
    const {
        lon,
        lat,
        temp,
        wind,
        date,
        sunrise,
        sunset,
        city,
        icon,
    } = props.state;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    const resultsData = [
        {
            id: 1,
            text: "Pogoda na dzisiaj dla",
            data: city,
            unit: null,
        },
        {
            id: 6,
            text: "Aktualna temperatura",
            data: temp,
            unit: "\u00B0C",
        },
        {
            id: 4,
            text: "Wiatr",
            data: wind,
            unit: "m/s",
        },
        {
            id: 7,
            text: "Wschód słońca",
            data: sunriseTime,
            unit: null,
        },
        {
            id: 8,
            text: "Zachód słońca",
            data: sunsetTime,
            unit: null,
        },
        {
            id: 5,
            text: "Aktualna data",
            data: date,
            unit: ".r",
        },
        {
            id: 2,
            text: "Długość Geograficzna",
            data: lon,
            unit: null,
        },
        {
            id: 3,
            text: "Szerokość Geograficzna",
            data: lat,
            unit: null,
        },
    ];

    const results = resultsData.map(result => (
        <div key={result.id} className="tile">
            <div className="tile__overlay"></div>
            <p className="tile__text-p">
                {result.text}{" "}
                <span className="tile__spn-color">{result.data}</span>{" "}
                {result.unit}
            </p>
            <img src={icon} alt="Icon Weather" />
        </div>
    ));

    return <div className="result">{results}</div>;
};

export default Result;
