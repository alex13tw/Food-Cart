import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState]=useState("Sign Up")
  return (
    
    <div className='login-popup'>
      <form className='login-popup-container'>
      <div className='login-popup-title'>
      <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
      </div>
      <div className='login-popup-inputs'>
      {currState==="Login"?<></>: <input type='text' placeholder='name' required />}
     
      <input type='email' placeholder='email' required />
      <input type='password' placeholder='password' required />
      </div>
      <button>{currState === "Sign up" ? "create account" : "Login"}</button>
      <div className='login-popup-condition'>
      <input type='checkbox' required />
      <p>i agree the condition</p>

      </div>
      
     
        {currState==="Login"?<p>create a new account <span onClick={()=>setCurrState("Sign up")}> click here</span></p>:
         <p>have a accunt <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}

      </form>
    </div>
  )
}

export default LoginPopup
