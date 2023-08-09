import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Weather from './Components/Weather'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid p-0'>
      <Header />
      <Home />
      <Weather />
    </div>
  )
}

export default App
