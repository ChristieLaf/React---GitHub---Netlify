import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WeatherSearch from "./WeatherSearch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App router={root} />
    <WeatherSearch />
  </BrowserRouter>,
  document.querySelector("#weather")
);
