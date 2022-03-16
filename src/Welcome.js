import React from 'react'
import logo from './metric.svg'

import Main from './Main'
import { Link } from 'react-router-dom'


function Welcome() {
  return (
   <>
   <div style={{width:'100vw',height:'100vh',marginTop:'15px',overflow:'hidden'}}>
    <center>
    <img src={logo} alt="welcome" style={{height:'60vh',width:'60vw',overflow:'hidden'}}/><br/><br/>
    
    <h1>Welcome on board</h1><br/><br/>
    
   
    <Link to="/Main" style={{textDecoration:'none'}}>
    <button className='btn btn-primary'>GO TO PANEL</button>
    </Link>
    </center>
   

   </div>
   
   </>
  )
}

export default Welcome