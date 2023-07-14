import React from "react";

export default function Structure() {
  let weatherData = {
    city: "New York",
  };

  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form action="" id="search-form" class="mb-3">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <h1 id="city"> {weatherData.city}</h1>
            <ul>
              <li>
                Last Updated at: <span id="date"></span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="d-flex weather-temperature">
                <img alt="" id="icon" />
                <div>
                  <strong id="temperature">60</strong>
                  <span class="units">
                    <a href="#" id="celsius-link" class="active">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6" id="wind-speed">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span>
                  <span class="wind-speed">
                    <a href="#" id="metric-wind-unit-link" class="active">
                      km/h
                    </a>
                    |
                    <a href="#" id="imperial-wind-unit-link">
                      m/h
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
