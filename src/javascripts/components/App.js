import React, { Component } from "react";
import "./../../scss/App.scss";
import Search from "./Search";
import Result from "./Result";
import Swal from "sweetalert2";

class App extends Component {
    constructor(props) {
        super(props);
        this.apiKey = "889f2df8a5bddd28d2b0a76a6325c419";
        this.baseApiUrl = "http://api.openweathermap.org";
        this.getData = new Date().toLocaleDateString();
    }

    state = {
        value: "" || "Kielce",
        lon: null,
        lat: null,
        temp: null,
        pressure: null,
        wind: null,
        date: null,
        sunrise: null,
        sunset: null,
        city: null,
        icon: null,
    };

    handleInputChange = e => {
        this.setState({
            value:
                e.target.value.charAt(0).toUpperCase() +
                e.target.value.slice(1),
        });
    };

    setStateValues = data => {
        const { coord, main, sys, wind, weather } = data;
        const imgUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
        this.setState(prevState => {
            return {
                lon: coord.lon,
                lat: coord.lat,
                temp: main.temp,
                pressure: main.pressure,
                wind: wind.speed,
                date: this.getData,
                sunrise: sys.sunrise,
                sunset: sys.sunset,
                city: prevState.value,
                value: "",
                icon: imgUrl,
            };
        });
    };

    getDataFromApi = () => {
        if (!this.state.value) return;
        const url = `${this.baseApiUrl}/data/2.5/weather?q=${this.state.value}&appid=${this.apiKey}&units=metric`;
        fetch(url)
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject({
                    status: res.status,
                    statusText: res.statusText,
                });
            })
            .then(data => this.setStateValues(data))
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Nie znaleziono miasta o podanej nazwie",
                });
                return console.error(
                    `Ooops error: ${err.status} (${err.statusText})`
                );
            });
    };

    componentDidMount() {
        this.getDataFromApi();
    }

    handleSubmitForm = e => {
        e.preventDefault();
        this.getDataFromApi();
    };

    render() {
        return (
            <div className="app">
                <Search
                    change={this.handleInputChange}
                    value={this.state.value}
                    submit={this.handleSubmitForm}
                />
                <Result state={this.state} />
            </div>
        );
    }
}

export default App;
