import React from 'react'

export default function Result(props) {
    const {weatherData: data} = props;
    function KelvinToCelcius (k) {
        return (k - 273.15).toFixed(2) + '^C';
    }
    function getTheDate(stamp) {
        const date = new Date(stamp * 1000);
        return date.toLocaleTimeString();
    }

    if (data == "") {
        return (
            <>
                <div className='row'>
                    <div className='col'>
                        <div className='card border-primary'>
                            <div className='card-body'>
                                <h4 className='card-title'>City</h4>
                                <p className='card-text temp-description'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
          <>
              <div className='row'>
                  <div className='col'>
                      <div className='card border-primary'>
                          <div className='card-body'>
                              <h4 className='card-title'>City {data.name}</h4>
                              <p className='card-text temp-description'>Temp: {KelvinToCelcius(data.main.temp)}</p>
                              <p className='card-text temp-description'><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /> {(data.weather[0].description).toUpperCase()}</p>
                              <div className='row'>
                                    <div className='col'>
                                        <div className='row'>
                                            <table className='table'>
                                                <tbody>
                                                    <tr>
                                                        <th>Feels Like</th>
                                                        <td> {KelvinToCelcius(data.main.feels_like)} </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Min. Temperature</th>
                                                        <td> {KelvinToCelcius(data.main.temp_min)} </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Max. Temperature</th>
                                                        <td> {KelvinToCelcius(data.main.temp_max)} </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sun Rise</th>
                                                        <td> {getTheDate(data.sys.sunrise)} </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sun Set</th>
                                                        <td> {getTheDate(data.sys.sunset)} </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </>
        )
      }
    }
