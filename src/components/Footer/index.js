
import React, { useState } from 'react';
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import gmail from "../../assets/images/gmail.svg"

function Footer() {


    return (
        <div className="footer d-flex fixed-bottom justify-content-center">

            <a href="https://github.com/alexo-a" target="_blank" rel="noopener noreferrer"><img className="contact-icon" src={github} alt="github link" /></a>
            
            <a href="mailto:a.ostrowski.11@gmail.com"><img className="contact-icon" src={gmail} alt="email link" /></a>
            
            <a href="https://www.linkedin.com/in/alexander-ostrowski-3603aa89/" target="_blank" rel="noopener noreferrer"><img className="contact-icon" src={linkedin} alt="linkedin link" /></a>
        
        </div>
    )
}

export default Footer;