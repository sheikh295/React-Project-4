import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-20'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Weather App <i className='fa fa-cloud'></i></a>
                <button className='navbar-toggler d-lg-none' type='button' data-toggle="collapse" data-target="#collapsibleNavId" aria-controls='collapsibleNavId' aria-expanded="falsa" aria-label='Toggle Navigation'> <span className='navbar-toggler-icon'></span> </button>
                <div className='collapse navbar-collapse' id='collapsibleNavId'>
                    <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                        <li className='nav-item active'><Link to={`/`} className='nav-link'>Home <i className='fa fa-home'></i></Link></li>
                        <li className='nav-item'><Link to={`/weather`} className='nav-link'>Weather <i className='fa fa-cloud'></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}