import React, { Component } from 'react'
import Search from './Search';
import Result from './Result';

class Weather extends Component {
  render() {
    return (
      <div className='container pt-4' style={{height: '500px'}}>
        <Search />
        <Result />
      </div>
    )
  }
}

export default Weather;