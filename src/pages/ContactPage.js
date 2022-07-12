import React from 'react';
import '../styles/pages/ContactPage.css';

const ContactPage = (props)=>{
    return(
        <main className="holder">
            <div className="d-block w-100" >
            <form action="" method="" className="form d-flex" >
        
                    <input className="input" type="email" placeholder="YOUR EMAIL ADDRESS"/>
        
                    <input className="input" type="text" placeholder="YOUR NAME"/>
        
                    <input className="input" type="text" placeholder="EMAIL SUBJECT"/>
        
                    <textarea className="input" id="coment" placeholder="YOUR MESSAGE"></textarea>

                    <input className="input" id="send" type="submit" value="SEND"/>

            </form>
            </div>
            <div className="columns">
                <div className="rightColumn">
                <ul>
                        <li>(02) 9550  1321</li>
                        <li>Monday to Friyday:<br></br>8am - 4pm</li>
                        <li>Saturday &amp; Sunday: Closed</li>
                </ul>

                <div className="rightColumn">

                    <ul>
                        <li>13-15/61-71 Beauchamp Rd</li>
                        <li>Matraville</li>
                        <li>NSW </li>
                        <li><a href="mailto:info@alchemyco.com.au?Subject=Please%20contact%20me">info@alchemyco.com.au</a></li>
                    </ul>
                </div>
                </div>
            </div>
        
        </main>
        
    );
}

export default ContactPage;