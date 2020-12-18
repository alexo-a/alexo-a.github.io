
import React, { useState } from 'react';
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import gmail from "../../assets/images/gmail.svg"

function Footer() {


    return (
        <div className="footer d-flex fixed-bottom justify-content-center">
            <a href="www.google.com"><img className="contact-icon" src={github} alt="github link" /></a>
            <a href="www.google.com"><img className="contact-icon" src={gmail} alt="email link" /></a>
            <a href="www.google.com"><img className="contact-icon" src={linkedin} alt="linkedin link" /></a>
        </div>
    )
}

export default Footer;