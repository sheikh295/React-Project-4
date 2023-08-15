import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Weather from './Components/Weather'
import Errorpage from './Components/Errorpage'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
            <div >
              <Header />
              <Home />
            </div>,
    errorElement: <Errorpage />,
  },
  {
    path: "/weather",
    element:
            <div>
              <Header />
              <Weather />
            </div>
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid p-0'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
