import React from 'react';
import '../styles/pages/AboutUsPage.css';
import { Carousel,Col, Row } from "react-bootstrap";

const AboutUsPage = (props)=>{
    return (
        <main className='holder'>
            <div  className='cuadrado '>
                <h2>About us</h2>
                <p>We are a company with over 20 years of experience  in custom set and display manufacturing. Our team is a combination of the best profesionals.</p>
            </div>

<section>
        <h1>TEAM ALCHEMY</h1>
    <p>Our Team prides itself on delivering <span>CREATIVITY, QUALITY &amp; PARTNERSHIP!</span></p>
        <p>We pride ourselves on helping customers achieve outstanding projects because
        <br/><span>“WE GIVE A SHIT!"</span></p>
</section>           

<div className="team-carousel">
                <Carousel className="carousel-dark slide " data-bs-ride="carousel" interval={100000000}>
                    <Carousel.Item>
                    <div className=" d-flex w-100  px-2">
                      <img
                        className=" image d-flex  w-50"
                        src="images\about\ani2.png"
                        alt="Anita"
                        />
                        <div className='d-block w-100 '>
                            <div className='text-team w-75 mt-3'>
                                <h4 className='name'>ANITA MARTIN TORRES</h4>
                                <h5 className='position  mb-0'>Production Designer</h5>
                                <p className='description mb-0 '>Multi-talented &amp; innovative in creating design solutions that look amazing-despite all sorts of jobs to deal with.</p>
                            </div>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex w-100 px-2 ">
                        <img
                        className=" image d-flex  w-50"
                        src="images\about\BEC2.png"
                        alt="Bec"
                        />
                        <div className='d-block w-=100'>
                            <div className='text-team w-75 mt-3'>
                                <h4 className='name'>Bec Ianna</h4>
                                <h5 className='position  mb-0'>PROJECT MANAGER</h5>
                                <p className='description mb-0 '>THEY CONVERT A CONCEPT INTO A REALITY THAT CAN BE BUILT ON TIME & ON BUDGET. WITH OVER 20 YEARS OF COMBINED INDUSTRY EXPERIENCE, THEY DELIVER-CONSISTENTLY!</p>
                            </div>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex w-100 px-2">
                        <img
                        className="image d-flex w-50"
                        src="images\about\CHARLY3.png"
                        alt="vivid 2"
                        />
                         <div className='d-block w-=100'>
                            <div className='text-team w-75 mt-3'>
                                <h4 className='name'>Charly Mcdonald</h4>
                                <h5 className='position  mb-0'>LOGISTIC SUPERVISOR</h5>
                                <p className='description mb-0 '>YEARS OF EXPERIENCE INSTALLING A RANGE OF DIFFERENT PROJECTS IN ALL TYPES OF LOCATIONS-WITH CONSISTENT CUSTOMER SATISFACTION AND QUALITY.</p>
                            </div>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex  ps-2 w-100  ">
                        <img
                        className="image d-flex w-50"
                        src="images\about\Diego2-1.png"
                        alt="vivid 2"
                        />
                    <div className='d-block w-=100'>
                            <div className='text-team w-75 mt-3'>
                                <h4 className='name'>DIEGO CARTELLE</h4>
                                <h5 className='position  mb-0'>GRAPHICS MANAGER</h5>
                                <p className='description mb-0 '>Multi-talented & innovative in creating print solutions that look amazing-despite all sorts of applications to deal with.</p>
                            </div>
                    </div>

                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex  ps-2 w-100  ">
                        <img
                        className="image d-flex w-50"
                        src="images\about\jaime2.png"
                        alt="vivid 2"
                        />
                        <div className='text-team w-75 mt-3 px-2 me-5'>
                                <h4 className='name'>Jaime Merchan</h4>
                                <h5 className='position  mb-0'>PROJECT MANAGER</h5>
                                <p className='description mb-0 '>THEY CONVERT A CONCEPT INTO A REALITY THAT CAN BE BUILT ON TIME & ON BUDGET. WITH OVER 20 YEARS OF COMBINED INDUSTRY EXPERIENCE, THEY DELIVER-CONSISTENTLY!</p>
                        </div>

                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex ps-2 w-100  ">
                        <img
                        className="image d-flex w-50"
                        src="images\about\JC1.png"
                        alt="vivid 2"
                        />
                    <div className='text-team w-75 mt-3 px-2 me-5'>
                                <h4 className='name'>John Chellingworth</h4>
                                <h5 className='position  mb-0'>CFO</h5>
                                <p className='description mb-0 '>FORMER CEO THAT ENSURES THAT CASH FLOW IS MANAGED &amp; SYSTEMS DELIVER PROFITS.</p>
                    </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex  ps-2 w-100  ">
                        <img
                        className="image d-flex w-50"
                        src="images\about\MATT2.png"
                        alt="vivid 2"
                        />
                    <div className='text-team w-75 mt-3 px-2 me-5'>
                                <h4 className='name'>Matt Aylife</h4>
                                <h5 className='position  mb-0'>CREATIVE DIRECTOR</h5>
                                <p className='description mb-0 '>20 YEARS OF DEVELOPING HIGH QUALITY &amp; CREATIVE SOLUTIONS COMBINED WITH FAIR PRICING.</p>
                    </div>

                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" d-flex  ps-2 w-100  ">
                        <img
                        className="image d-flex w-50"
                        src="images\about\Tony.png"
                        alt="vivid 2"
                        />
                    <div className='text-team w-75 mt-3 px-2 me-5'>
                                <h4 className='name'>Anthony Shone</h4>
                                <h5 className='position  mb-0'>PRODUCTION MANAGER</h5>
                                <p className='description mb-0 '>EXTENSIVE BUILD &amp; MANUFACTURING EXPERIENCE WITH STATE-OF-THE-ART EQUIPMENT AND A PRODUCTION TEAM THAT EXCELS.</p>
                    </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
</div>

<div className='mision'>
                <h1>OUR MISSION</h1>
                <p><span>"You imagine it, we create it"</span> is our charter here at Alchemy. With over 20 years experience in custom set and display manufacturing, the company has worked with over 100 of Australia’s leading brand agencies, and with over 2000 installations achieved we know our stuff. Our team of local and European craftspeople are multi-talented in all trades to produce high quality creations to represent your brand or environment.</p>
                <p>A community of production professionals with over 200 years of combined experience means the team at Alchemy has broad talent in all areas. From the design team through to account management, workshop and event logistics, our team presides over all areas of production and manufacturing to deliver your creative ideas.</p> 
            </div>
</main>
    );
}

export default AboutUsPage;