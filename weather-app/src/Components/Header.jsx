import React from 'react'

export default function Header() {
  return (
    <>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-20'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Weather App <i className='fa fa-cloud'></i></a>
                <button className='navbar-toggler d-lg-none' type='button' data-toggle="collapse" data-target="#collapsibleNavId" aria-controls='collapsibleNavId' aria-expanded="falsa" aria-label='Toggle Navigation'> <span className='navbar-toggler-icon'></span> </button>
                <div className='collapse navbar-collapse' id='collapsibleNavId'>
                    <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                        <li className='nav-item active'><a className='nav-link' href=''>Home <i className='fa fa-home'></i></a></li>
                        <li className='nav-item'><a className='nav-link' href=''>Weather <i className='fa fa-cloud'></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}