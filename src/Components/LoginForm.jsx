import React, { useState } from 'react';
import './LoginForm.css';
import { FaLock, FaUser, FaMailBulk } from 'react-icons/fa';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { Link } from "react-router-dom";


const LoginForm = () => {

    const [action, setAction] = useState("Sign Up");


  return (
    <div className='wrapper'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <FaUser className='icon' />
                <input type='text' placeholder='Username' />
            </div> }
            
            <div className='input'>
                <FaMailBulk className='icon' />
                <input type='email' placeholder='Email ID' />
            </div>
            <div className='input'>
                <FaLock className='icon' />
                <input type='password' placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
        
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}><Link to="/dashboard" className="dash">Login</Link></div>
           
        </div>
        <Navbar />
        <Footer />
    </div>
  )
}

export default LoginForm