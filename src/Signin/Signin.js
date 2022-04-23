import React from 'react'
import './Signin.css'
import { FaFacebook,FaTwitter } from "react-icons/fa";
function Signin() {
  return(
      <section className="bckground">
        <div className="container">
          <div className="signin__card">
            <div className="signin__header">
              <div className="logo">GameVerse</div>
              <div className="signin__text">Sign In</div>
            </div>
            <div className="signin__inputs">
              <input type="text" placeholder='Username' className='username'/>
              <input type="password" placeholder='Password' className='password'/>
              <label>
                <input type="checkbox"/>Remember Me
              </label>
            </div>
            <div className="login__button">
              <button className='log__in'>Log In</button>
              <button className='log__in facebook'><FaFacebook/></button>
              <button className='log__in twitter'><FaTwitter/></button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Signin