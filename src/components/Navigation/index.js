import { Link } from "react-router-dom";
import React, { useState } from 'react';


function Navigation() {
    const [activePage, setActivePage] = useState(null)
    function updateState(newPage) {
        setActivePage(newPage)
    }

    return (
        <div className="navigation">
            
            <Link to={`/`}>
                <div 
                className={activePage === "home" || !activePage ? "link active" : "link"} 
                onClick={() => {updateState("home")}}
                >
                    Home
                </div>
            </Link>
            
            <Link to={`/about`}>                
                <div 
                className={activePage === "about" ? "link active" : "link"} 
                onClick={() => { updateState("about") }}
                >
                    About
                </div>
            </Link>
            <Link to={`/work`}>                
                <div 
                className={activePage === "work" ? "link active" : "link"} 
                onClick={() => { updateState("work") }}
                >
                    Work Examples
                </div>
            </Link>
            <Link to={`/hobbies`}>                
                <div 
                className={activePage === "hobbies" ? "link active" : "link"} 
                onClick={() => { updateState("hobbies") }}
                >
                    My Hobbies
                </div>
            </Link>
            <Link to={`/contact`}>
                <div 
                className={activePage === "contact" ? "link active" : "link"} 
                onClick={() => { updateState("contact") }}
                >
                    Contact
                </div>
            </Link>
        </div>
    )
}

export default Navigation;