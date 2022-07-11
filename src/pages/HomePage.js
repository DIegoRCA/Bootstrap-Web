import React from 'react';
import {Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/HomePage.css';

const HomePage = (props)=>{
    return (
        <Container className='holder'>
            <Row  className='d-flex video '>
                <video className=' mb-5 w-100' controls  autoPlay>
                <source className='w-100' src="/1286756359.mp4" type="video/mp4"/>
                </video>
            </Row>
            <Row className="d-flex">
                <Col className="bigText d-flex col-lg-4  text-primary aling-self-center juistify-content-center">
                    <h1 className=''>WHO ARE WE?</h1>
                </Col>
                <Col className="smallText d-flex col-lg-4  lead ">
                    <p className="aling-self-center juistify-content-center"> We are a creative community of designers and craftsmen that focuses on quality.
                
                        <br></br> <br></br>We translate your creative and technical concepts into unique and engaging experiences.
                
                        <br></br> <br></br>We create premium custom products that inspire and embody solutions for all brands.
                    </p>
            
                </Col>
                <Col className="monogram col-lg-4">
                    
                    <img src="images/home/Asset 1.svg" alt="Alchemy monogram"/>
                    
                </Col>
            </Row>
        </Container>
  
    );
}

export default HomePage;