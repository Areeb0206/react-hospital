import React from 'react';
import './navbar.css';
import { Nav,Navbar,Form} from 'react-bootstrap';



function Navbr() {
  return(
     <div >
         <Navbar expand="lg" className="navbar">
            <div className="left-nav">

                <div className="logo"></div>
                <div className="text">Hospital</div>
             </div>   
                 <div className="menu"> <Navbar.Toggle aria-controls="basic-navbar-nav" className="icon" /></div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              
              </Nav>
              <Form inline className="navform" >
                  <ul>
                     <li><a href="home">Home</a></li>
                     <li><a href="home">About Us</a></li>
                     <li><a href="home">Doctors</a></li>
                     <li><a href="home">Contact Us</a></li>
                  </ul>
              </Form>
            </Navbar.Collapse>
          </Navbar>
     </div>
    
    );

}

export default Navbr;
