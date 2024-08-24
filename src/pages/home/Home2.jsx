import React from 'react'
import homeImg2 from '../../assets/home-secondary.svg' ;
import Tilt from 'react-parallax-tilt';
import {
     FaGithub ,
     FaTwitter ,
     FaInstagram
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Home2() {
  return (
    <div className="container-fluid" style={{marginTop:'150px'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-3 text-center py-4">
                    <Tilt>
                      <img src={homeImg2} alt="person-icon" className='pt-3'/> 
                    </Tilt>
                </div>
                <div className="col-12 col-lg-9 text-center py-5 px-0 px-md-5">
                    <h3 className='mb-3 display-5 display-md-4 fw-bold'> 
                        LET ME {" "}
                        <span style={{color:'#ab3483'}}>
                            INTRODUCE {" "}
                        </span>
                        MYSELF
                    </h3>
                    <p className="mb-2 fs-5 fs-md-3">
                        I have developed a passion for programming, and I believe I have learned at least something so far... 🤷‍♂️
                    </p>
                    <p className='mb-2 fs-5 fs-md-3'>
                        I have a solid foundation in {" "}
                        <span style={{color:'#ab3483'}}>
                        major programming languages {" "}
                        </span>
                        like {" "}
                        <span style={{color:'#ab3483'}}>
                        Python and JavaScript. {" "}
                        </span>
                    </p>
                    <p className='mb-2 fs-5 fs-md-3'>
                        My field of Interest's are building new  {" "}
                        <span style={{color:'#ab3483'}}>
                        Web Technologies {" "}
                        </span>
                        and {" "}
                        <span style={{color:'#ab3483'}}>
                        Products
                        </span>
                    </p>
                    <p className='fs-5 fs-md-3'>
                    Whenever possible, I also apply my passion for developing products with {" "}
                    <span style={{color:'#ab3483'}}>
                    Node.js {" "}
                    </span>
                    and {" "}
                    <span style={{color:'#ab3483'}}>
                    Modern Javascript Library {" "}
                    </span>
                    and {" "}
                    <span style={{color:'#ab3483'}}>
                    Frameworks {" "}
                    </span> 
                    like {" "}
                    <span style={{color:'#ab3483'}}>
                    React.js {" "}
                    </span> 
                    and {" "}
                    <span style={{color:'#ab3483'}}>
                    Vue.js
                    </span>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h5>
                        FIND ME ON
                    </h5>
                    <h6 className='mb-3'>
                        Feel Free To {" "} 
                        <span style={{color:'#ab3483'}}>
                        Connect
                        </span>
                        With Me
                    </h6>
                    <p className='d-flex justify-content-center gap-3'>
                        <a href="https://github.com/SANJAY-hue-cell" target='_blank' className='social-links'>
                            <FaGithub size={30} color='#ab3483' />
                        </a>
                        <a href="https://x.com" target='_blank' className='social-links'>
                            <FaTwitter size={30} color='#ab3483' />
                        </a>
                        <a href="https://www.instagram.com" target='_blank' className='social-links'>
                            <FaInstagram size={30} color='#ab3483' />   
                        </a>
                        <a href="https://www.linkedin.com/in/sanjay-d-7aba96189/" target='_blank' className='social-links'>
                            <FaLinkedinIn size={30} color='#ab3483' />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home2