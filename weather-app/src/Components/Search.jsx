import React from 'react'

export default function Search(props) {
  return (
    <>
        <div className='row'>
            <div className='col-lg-5'>
                <div className='form-group'>
                    <label>Type Your City Name</label>
                    <input className='form-control' onChange={props.change} value={props.city} type='text' name='city' id='city' aria-describedby='helpId' placeholder=''></input>
                </div>
            </div> 
            <div className='col-lg-1 text-center'>
                <label htmlFor=''></label>
                <h5>Or</h5>
            </div>
            <div className='col-lg-5'>
                <div className='form-group'>
                    <label htmlFor=''>Get Co-ordinates</label>
                    <button className='btn fa fa-crosshairs' onClick={props.getLocation}></button>
                    <div className='row'>
                        <div className='bg-dark text-white rounded pt-1 pl-1 pr-1'>Lat:</div>
                        <input value={props.lat} onChange={props.change} type='number' className='form-control col mr-1' name='lat' id='lat' aria-describedby='helpId' placeholder=''></input>
                        <div className='bg-dark text-white rounded pt-1 pl-1 pr-1'>Lon:</div>
                        <input value={props.lon} onChange={props.change} type='number' className='form-control col' name='lon' id='lon' aria-describedby='helpId' placeholder=''></input>
                    </div>
                </div>
            </div>
            <div className='col-lg-1'>
                <label htmlFor=''>Search</label>
                <button onClick={props.search} className='btn btn-primary fa fa-search'></button>
            </div>
        </div>
    </>
  )
}
