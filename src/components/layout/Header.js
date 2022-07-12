import React from 'react';
import { Navbar, Nav, Container,Row,Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../styles/layout/Header.css';

function NavigationBar() {
return (
<Navbar  expand="lg" variant="dark" sticky='top' className="d-flex bg-dark w-100">
  
<Container className=" navbar justify-content-center ">
 
<Row  className=" justify-content-center w-100">
  <Col className="justify-content-center ">
<Navbar.Brand href="/" className="d-block mt-3 mb-0">
<img
        src="/logo.png"
        width="200"
        height="auto"
        className="d-inline-block align-top"
        alt="Alchemy logo"
      />
 <p className='logoText'>You imagine it, We create it</p>
 </Navbar.Brand>
</Col>
<Col className="align-self-center">
<Navbar.Toggle aria-controls="basic-navbar-nav "/>
<Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">

<Nav>
<LinkContainer to="/">
<Nav.Link>Home</Nav.Link>
</LinkContainer>
<LinkContainer to="/about">
<Nav.Link>About Us</Nav.Link>
</LinkContainer>
<LinkContainer to="/portfolio">
<Nav.Link>Portfolio</Nav.Link>
</LinkContainer>
<LinkContainer to="/services">
<Nav.Link>Services</Nav.Link>
</LinkContainer>
<LinkContainer to="/novedades">
<Nav.Link>News</Nav.Link>
</LinkContainer>
<LinkContainer to="/contact">
<Nav.Link>Contact</Nav.Link>
</LinkContainer>
</Nav>
</Navbar.Collapse>
</Col>
</Row>
</Container> 

</Navbar>
);
}
export default NavigationBar;