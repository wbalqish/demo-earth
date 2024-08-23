import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../Assets/earth.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
            <div className="content">
                <p>UZMASAT-1</p>
                <h1>See The Bigger Picture.</h1>
                <div>
                    <Link to="/getstarted" className="btn">Get Started</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;