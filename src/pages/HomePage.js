import React from 'react';
import {Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/pages/HomePage.css';
import ReactPlayer from 'react-player'
const HomePage = (props)=>{
    return (
        <Container className='holder'>
            <Row className='d-flex align-self-center'>
                <div className='videoBox d-flex w-100'>
                <ReactPlayer className='video'
                url='images/home/1286756359.mp4'
                width='100'
                height='100'
                playsInline
                
                loop
                playing
                />
{/*                 <video className=' d-flex video mb-5' controls loop autoplay>
                <source className='w-100' src="images/home/1286756359.mp4" type="video/mp4"/>
                </video> */}
                </div>
            </Row>
            <Row className="d-flex  m-2 p-2 w-100">
                
                <Col className="bigText d-block  text-primary">
                    <h1>WHO ARE WE?</h1>
                </Col>
                <Col className="smallText d-block juistify-content-center  lead ">
                    <p className="pt-2 "> We are a creative community of designers and craftsmen that focuses on quality.
                
                        <br></br> <br></br>We translate your creative and technical concepts into unique and engaging experiences.
                
                        <br></br> <br></br>We create premium custom products that inspire and embody solutions for all brands.
                    </p>
            
                </Col>
                <Col className="monogram1 juistify-content-center">
                    
                    <img src="images/home/Asset 1.svg" alt="Alchemy monogram" className='imgMonogram'/>
                    
                </Col>
              
            </Row>
        </Container>

    );
}

export default HomePage;