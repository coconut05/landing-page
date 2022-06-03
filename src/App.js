import React from 'react'
import './App.css'
import o1 from "./assets/o1.png"
import o3 from "./assets/o3.png"

const App = () => {
  return (
    <div className="main-div">
      <div className="header">
        <div className="header-left">
          <h2>Welcome to my Landing Page.</h2>
          </div>
          <div className="header-right">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
      </div>
      <div className='orange-main"'>

        </div>
        <div className='orange-diag'></div>
        <div className='orange-subsec1'>
          <h1 className='head-main'>
            <span className='head-left'>Colline</span>
            <img className='o3' src={o3} alt=''/>
          </h1>
          <p>
            This landing page is for school activity use only, I do not own any of the images I use in this website.
          </p>
        </div>
        <div className='o1'>
          <img src={o1} alt=''/>
        </div>
      </div>
    
  )
}

export default App