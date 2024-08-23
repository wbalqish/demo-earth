import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Uzma Tower</p>
                        <p>Petaling Jaya, Selangor,</p>
                        <p>Malaysia.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />+603-7611 4000</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />geospatial@uzmagroup.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Geospatial AI Sdn Bhd, a subsidiary of Uzma Berhad, is a geospatial analytics company focusing on the downstream space sector.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer