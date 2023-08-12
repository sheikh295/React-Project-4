import React, { Component } from 'react'
import Search from './Search';
import Result from './Result';
import axios from 'axios';

class Weather extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lat: "",
       lon: "",
       weatherData: "",
       city: "",
    }
  }

  changeHandler = (event) => {
    const name = event.target.name;
    if (name == "city"){
      this.setState({city : event.target.value})
    }
    else if (name == "lat") {
      this.setState({lat : event.target.value})
    }
    else if (name == "lon") {
      this.setState({lon : event.target.value})
    }
  };

  locationHandler = () => {
    this.setState({lat: "", lon: ""});
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (response) => {
          this.setState({lat: response.coords.latitude, lon: response.coords.longitude}, () => {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=56fe2647587b1cef42d21de520f52d1f`)
            .then((result) => {
              this.setState({city: result.data.name, weatherData: result.data})
              console.log(this.state.weatherData);
            })
            .catch((error) => {
              console.log(error)
            })
          });
        },
        (error) => {
          console.log(error)
        }
      );
    }
    else {
      console.log("Location not supported");
    }
  };
  
  render() {
    return (
      <div className='container pt-4' style={{height: '500px'}}>
        <Search lat={this.state.lat} lon={this.state.lon} city={this.state.city} change={this.changeHandler} getLocation={this.locationHandler} weatherData={this.state.weatherData} />
        <Result />
      </div>
    )
  }
}

export default Weather;