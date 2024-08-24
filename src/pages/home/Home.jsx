import React from 'react'  ;
import Role from '../../components/Role' ;
import homeImg from '../../assets/home-main.svg';
import {Home2} from '../page'
import { Button } from 'react-bootstrap';
import pdf from '../../assets/SANJAY_D_RESUME.pdf'
import {AiOutlineDownload}  from 'react-icons/ai'

function Home() {
  return (
    <div className="container-fluid home-container">
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 home-intro py-5 px-0 px-md-5">
            <h5 className='mt-5 display-5 display-md-2 fw-bold'>
              Hi There ! {" "}
            </h5>
            <h5 className='display-5 display-md-2 fw-bold'>
              I'M {" "}
              <span style={{color:'#ab3483'}}>
                SANJAY D
              </span>
            </h5>
            <div className='fw-bold fs-2 ps-1 mt-5' style={{color:'#ab3483'}}>
              <Role />
            </div>
            <Button className='btn-resume mt-4' href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload size={20}/>
              <strong>&nbsp;Download CV</strong>
            </Button>
          </div>
          <div className="col-12 col-md-5 d-flex" style={{paddingBottom:'20px'}}>
            <img 
            src={homeImg} 
            alt="home" 
            className='img-fluid home-img'
            style={{maxHeight:'450px' , backgroundPosition:'center'}}
            />
          </div>
        </div>
      </div>
      <Home2 />
    </div>
  )
}

export default Home