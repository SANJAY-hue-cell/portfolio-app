import React from 'react'
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap' ;
import { FaHome } from "react-icons/fa";
import {
   GoPersonFill ,
   GoProjectSymlink
} from "react-icons/go";

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" className="portfolio-navbar" fixed='top' >
      <Container fluid>
        <Navbar.Brand href="/" className='nav-logo ps-4'>
          SD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="pe-0 pe-md-5 gap-2">
            <Nav.Link href="/" className='nav-link'>
               <span>
                <FaHome size={25} style={{marginBottom:'5px'}} />
               </span>
               <h5>
                Home
               </h5>
            </Nav.Link>
            <Nav.Link href="/about" className='nav-link'>
               <span>
                <GoPersonFill size={25} style={{marginBottom:'5px'}} />
               </span>
               <h5>
                About
               </h5>
            </Nav.Link>
            <Nav.Link href="/project" className='nav-link'>
               <span>
                <GoProjectSymlink size={25} style={{marginBottom:'5px'}} />
               </span>
               <h5>
                Projects
               </h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PortfolioNavbar