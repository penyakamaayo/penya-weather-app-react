import React, { Component } from 'react'
import Form from './Form'
import Weather from './Weather'
import axios from 'axios'

const API_Key =  "c1a18fb60bac08ecdce96c7d1f6d9ac1"

class Home extends React.Component {
  constructor(){
    super()
    this.state={
      city: undefined,
      description: ""
    };
  }
  
  // api.openweathermap.org/data/2.5/weather?q=Manila&appid=
  
  // getWeather = async () =>{
    //   const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=Manila&appid=`)
    // }
    
    getWeather = async e => {
    e.preventDefault()

    const city = e.target.elements.city.value;
    
    // const city = "Manila"
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);
    
    const response = await api_call.json();
    // console.log(response)
    // let data  = response.data;
    this.setState({
      city: `${response.name}`,
      description: response.weather[0].description
    });
}
  
  render() {
    return (
      <div>
        <Form weather={this.getWeather}/>
        <Weather
          cityname={this.state.city}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default Home