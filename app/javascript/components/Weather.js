import React from "react";

const Weather = props => {
  return (
    <div>
      <div>
        <h1>Country: {props.cityname}</h1>
        <h4>
          Weather: {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;