import React from 'react';
import '../../styles/components/layout/Footer.css';
import {
    FaFacebookF,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";

const Footer = (props)=>{
    return(
    <footer >
        
        <div className="footer d-flex col-12  w-100 ">
            <div className='d-block pb-1 col-lg-6'>
                    <p className='text-white'>Be in touch:</p>
                    <a target="blank" href="https://www.facebook.com/"> <FaFacebookF size="1.5rem" className='text-white mx-2' /></a>
                    <a target="blank" href="https://www.instagram.com/"><FaInstagram size="1.5rem" className='text-white mx-2'/></a>
                    <a target="blank" href="https://www.linkedin.com/"><FaLinkedin size="1.5rem" className='text-white mx-2'/></a>
            </div>
            <div className='footer1 col-lg-6 mx-2 w-100'>
                    <p> Tel: <span>(02) 9999 1321</span></p>
                    <p>E-mail: <a target="blank" href="mailto:diegocartelle@gmail.com?Subject=Please%20contact%20me">info@greatalchemy.com.au</a></p>
            </div>
        </div>
    </footer>   
        
   
    );
}

export default Footer;