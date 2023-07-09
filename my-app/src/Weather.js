import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Weather() {
  return (
    <h2>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />{" "}
      Hello from Weather
    </h2>
  );
}
