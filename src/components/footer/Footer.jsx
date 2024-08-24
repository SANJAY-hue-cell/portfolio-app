import React from 'react'
import {
    FaGithub ,
    FaTwitter ,
    FaInstagram
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="container-fluid py-3" style={{backgroundColor:'#2a2a36'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 text-center">
                    <p className='mb-0 text-light'>
                        Developed By SANJAY D
                    </p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <p className='mb-0 text-light'>2024 @ All Rights Reserved</p>
                </div>
                <div className="col-12 col-md-4 d-flex gap-3 justify-content-center">
                    <a className='footer-social-icons' href="https://github.com/SANJAY-hue-cell" target='_blank'>
                        <FaGithub size={20} color='#ab3483'/>
                    </a>
                    <a className='footer-social-icons' href="https://x.com" target='_blank'>
                        <FaTwitter size={20} color='#ab3483'/>
                    </a>
                    <a className='footer-social-icons' href="https://www.instagram.com" target='_blank'>
                        <FaInstagram size={20} color='#ab3483'/>
                    </a>
                    <a className='footer-social-icons' href="https://www.linkedin.com/in/sanjay-d-7aba96189/" target='_blank'>
                        <FaLinkedinIn size={20} color='#ab3483'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer