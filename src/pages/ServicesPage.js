
import React from 'react';
import '../styles/components/pages/ServicesPage.css';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';



const ServicesPage = (props)=>{
    return (
<main className='holder'>

    <div className='cuadrado'>
      <h2>Services</h2>
      <p>As a company we are after every part of the procces, in this way your journey with us is a piece of mind.</p>
    </div>
        
    <div id="large " className='container-services'>

        <div className='foto-services'>
          <div className='imagen'>
                <img src="./images/services/consultation.png" alt="img01"/>
          </div>

          <div className="centrado1">
           
                <h3>CONSULTATION &amp; DESIGN</h3>
                <p>We act as translators, turning your great ideas into realities.</p>
                <>
                  {['left'].map((placement) => (
                    <OverlayTrigger
                      trigger="hover, focus"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{<strong>CONSULTATION & DESIGN</strong>}</Popover.Header>
                          <Popover.Body>
                          At Alchemy we offer results by translating your ideas and designs through a creative and collaboration process, which allows our multi-talented team to be an extension of your production service.

                          Through clever design, project management and production, our team approaches each project with innovative forward thinking to deliver outcomes for brands and agencies.
                          We also incorporate a Hot-Desk environment for our project partners so they can engage directly with our community.

                          Alchemy is Australian owned and operated; our consultation and design hub offers a complete end to end production facility under one roof, 15 minutes from the Sydney CBD.          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="button" variant="light">Read More</Button>
                    </OverlayTrigger>
                  ))}
                </>
          </div>
        </div> 


        <div className='foto-services'>
        <div className="centrado1">
                <h3>TAILORED SOLUTIONS</h3>
                <p>Unique products stimulate the imagination; we make brands stand out.</p>
                <>
                  {['right'].map((placement) => (
                    <OverlayTrigger
                      trigger="hover, focus"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{<strong>TAILORED SOLUTIONS</strong>}</Popover.Header>
                          <Popover.Body>
                          Alchemy’s creative works encompass everything from experiential projects, brand elements, film & TV, exhibitions, displays, stage sets, sculpture, and installations. We incorporate a “work art balance” allowing for creativity and quality through our community of craftsmen and women, all of whom are experts in creating semi-permanent brand solutions.

                          This collective has been tasked with delivering for some of Australia’s most creative agencies and global brands with a full service 1500 sqm workshop and creative hub.</Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="button" variant="light">Read More</Button>
                    </OverlayTrigger>
                  ))}
                </>  
            </div>
            <div className='imagen'>
            <img src="./images/services/tailored1.jpg" alt="img02"/>
            </div>
        </div>
        
        <div className='foto-services'>
            <div className='imagen'>
              <img src="./images/services/alchemy-go.png" alt="img03"/>
            </div>
            <div className="centrado1">
                <h3>ALCHEMY GO</h3>
                <p>Must have add-ons and accessories to deliver immediate solutions.</p>
                <>
                  {['left'].map((placement) => (
                    <OverlayTrigger
                      trigger="hover, focus"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{<strong>ALCHEMY GO</strong>}</Popover.Header>
                          <Popover.Body>
                          From backstage to front of house, Alchemy Go offers a range of event hire solutions available for turnkey projects. Whether it’s accessories for a bustling backstage environment, high impact branding for a trade show or pop-up activations, we have a selected range of accessories for these applications.
                          Alchemy Go products include display plinths, trade show shell scheme wraps and skins, through to backstage make-up mirrors and catwalks. Want something more bespoke? Talk to our Tailored Solutions team to amp up your event or display requirements.</Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="button" variant="light">Read More</Button>
                    </OverlayTrigger>
                  ))}
                </>             </div>
        </div>

        <div className='foto-services'>
        <div className="centrado1">
                <h3>DIGITAL PRINTING</h3>
                <p>High quality print media in a wide range of formats, turning ideas into realities.</p>

                <>
                  {['right'].map((placement) => (
                    <OverlayTrigger
                      trigger="hover, focus"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{<strong>DIGITAL PRINTING</strong>}</Popover.Header>
                          <Popover.Body>
                            From backstage to front of house, Alchemy Go offers a range of event hire solutions available for turnkey projects. Whether it’s accessories for a bustling backstage environment, high impact branding for a trade show or pop-up activations, we have a selected range of accessories for these applications.Alchemy Go products include display plinths, trade show shell scheme wraps and skins, through to backstage make-up mirrors and catwalks. Want something more bespoke? Talk to our Tailored Solutions team to amp up your event or display requirements.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="button" variant="light">Read More</Button>
                    </OverlayTrigger>
                  ))}
                </>


            </div>

            <div className='imagen'>
              <img src="./images/services/printing.jpg" alt="img04"/>
            </div>
        </div>

        <div className='foto-services'>
        <div className='imagen'>
            <img src="./images/services/logistic.jpg" alt="img05"/>
        </div>
            <div className="centrado1">
                <h3>LOGISTIGS</h3>
                <p>Professional event production, installation and management. We build anywhere, anytime.</p>
                <>
                  {['left'].map((placement) => (
                    <OverlayTrigger
                      trigger="hover, focus"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{<strong>LOGISTIGS</strong>}</Popover.Header>
                          <Popover.Body>
                            From backstage to front of house, Alchemy Go offers a range of event hire solutions available for turnkey projects. Whether it’s accessories for a bustling backstage environment, high impact branding for a trade show or pop-up activations, we have a selected range of accessories for these applications.Alchemy Go products include display plinths, trade show shell scheme wraps and skins, through to backstage make-up mirrors and catwalks. Want something more bespoke? Talk to our Tailored Solutions team to amp up your event or display requirements.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="button" variant="light">Read More</Button>
                    </OverlayTrigger>
                  ))}
                </>
            </div>
        </div>

    </div>

    <div className="small container d-flex align-items-center justify-content-center flex-wrap">
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="./images/services/consultation.png" alt="consultation"/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">CONSULTATION &amp; DESIGN</h3>
                        <p className="fs-6 text-white">We act as translators, turning your great ideas into realities.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src=".\images\services\tailored1.jpg" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">TAILORED SOLUTIONS</h3>
                        <p className="fs-6 text-white">Unique products stimulate the imagination; we make brands stand out.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src=".\images\services\printing.jpg" alt="Graphics"/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">DIGITAL PRINTING</h3>
                        <p className="fs-6 text-white">High quality print media in a wide range of formats, turning ideas into realities.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src=".\images\services\logistic.jpg" alt="Graphics"/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">LOGISTIGS</h3>
                        <p className="fs-6 text-white">Professional event production, installation and management. We build anywhere, anytime.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src=".\images\services\alchemy-go.png" alt="alchemy go"/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">ALCHEMY GO</h3>
                        <p className="fs-6 text-white">Must have add-ons and accessories to deliver immediate solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    );
}

export default ServicesPage;