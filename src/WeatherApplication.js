import React, { Component } from 'react';
import './WeatherApplication.css';

class WeatherApplication extends Component {
  state = {
    city: 'Colombo',
    latitude: '',
    longitude: '',
    todayWeather: null,
    threeDayWeatherForecast: null,
    weeklyWeatherForecast: null,
  };

  componentDidMount() {
    this.getWeatherData('Colombo');
  }

  getWeatherData = (city) => {
    // OpenWeatherMap API key
    const apiKey = '7fd5db840dd175eb70c203fb6ce431c2';

    // To fetch today's weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ todayWeather: data });
      })
      .catch((error) => {
        console.error('Error fetching today weather data: ' + error);
      });

    // to fetch a 3-day weather forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=3&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ threeDayWeatherForecast: data.list });
      })
      .catch((error) => {
        console.error('Error fetching weather forecast data: ' + error);
      });

    // To fetch a weekly weather forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weeklyWeatherForecast: data.list });
      })
      .catch((error) => {
        console.error('Error fetching weekly weather forecast data: ' + error);
      });
  };

  handleSearch = () => {
    const { latitude, longitude } = this.state;
    if (latitude && longitude) {
      const city = `${latitude},${longitude}`;
      this.getWeatherData(city);
    }
  };

  render() {
    const { city, latitude, longitude, todayWeather, threeDayWeatherForecast, weeklyWeatherForecast } = this.state;

    return (

      <div className="weather-app">
        <h1 className="weather-header">Weather App</h1>
        <div>
          <h2>Today's Weather in {city}</h2>
          {todayWeather && (
            <div>
              <p>Temperature: {todayWeather.main.temp} °C</p>
              <p>Weather: {todayWeather.weather[0].description}</p>
            </div>
          )}
        </div>

        <div>
          <h2>Three Days Weather Forecast</h2>
          {threeDayWeatherForecast && (
            <ul className="forecast-list"> 
              {threeDayWeatherForecast.map((item, index) => (
                <li key={index} className="forecast-item">
                  {item.dt_txt}: {item.main.temp} °C, {item.weather[0].description}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2>Weekly Weather Forecast</h2>
          {weeklyWeatherForecast && (
            <ul>
              {weeklyWeatherForecast.map((item, index) => (
                <li key={index}>
                  {item.dt_txt}: {item.main.temp} °C, {item.weather[0].description}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2>Search by Latitude and Longitude to get Weather Details</h2>
          <input
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => this.setState({ latitude: e.target.value })}
          />
          <input
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => this.setState({ longitude: e.target.value })}
          />
          <button onClick={this.handleSearch}>Search Weather</button>
        </div>
      </div>
    );
  }
}

export default WeatherApplication;
