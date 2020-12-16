
import React, { useState } from 'react';
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import gmail from "../../assets/images/gmail.svg"

function Footer() {


    return (
        <>
            <a href="www.google.com"><img className="contact-icon" src={github} /></a>
            <a href="www.google.com"><img className="contact-icon" src={gmail} /></a>
            <a href="www.google.com"><img className="contact-icon" src={linkedin} /></a>
        </>
    )
}

export default Footer;