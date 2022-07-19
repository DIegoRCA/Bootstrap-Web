import React from 'react';
import '../styles/components/pages/ContactPage.css';

const ContactPage = (props)=>{
    return(
        <main className="holder">
            <div className="d-flex w-100" >
                <form action="" method="" className="form d-flex w-100" >
                        <input className="input" type="email" placeholder="YOUR EMAIL ADDRESS"/>
            
                        <input className="input" type="text" placeholder="YOUR NAME"/>
            
                        <input className="input" type="text" placeholder="EMAIL SUBJECT"/>
            
                        <textarea className="input" id="coment" placeholder="YOUR MESSAGE"></textarea>
                    <div className='d-flex w-100'>
                        <div className='d-flex justify-content-center w-100 '>
                        <input className="input" id="send" type="submit" value="SEND"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="columns  d-block w-100">
                <div className="rightColumn d-block  w-100">
                    <ul>
                            <li>(02) 9550  1321</li>
                            <li>Monday to Friyday:<br></br>8am - 4pm</li>
                            <li>Saturday &amp; Sunday: Closed</li>
                    </ul>

                    <div className="rightColumn d-block  w-100">

                        <ul>
                            <li>13-15/61-71 Beauchamp Rd</li>
                            <li>Matraville</li>
                            <li>NSW </li>
                            <li><a className="mail"href="mailto:info@alchemyco.com.au?Subject=Please%20contact%20me">info@alchemyco.com.au</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </main>
        
    );
}

export default ContactPage;