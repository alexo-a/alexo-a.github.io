import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"


function Navigation() {
    const [activePage, setActivePage] = useState(null)
    function updateState(newPage) {
        setActivePage(newPage)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to={`/`}>
                        <div onClick={() => { updateState("home") }}><h4>Alex Ostrowski</h4></div>
                    
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
{/*
                        <Nav.Link>                    
                            <Link to={`/about`}>
                            <div
                                className={activePage === "about" ? "link active" : "link"}
                                onClick={() => { updateState("about") }}
                            >
                                About
                            </div>
                        </Link>
                        </Nav.Link>
    */}
                        <Nav.Link>
                            <Link to={`/work`}>
                                <div
                                    className={activePage === "work" ? "link active" : "link"}
                                    onClick={() => { updateState("work") }}
                                >
                                    Work Examples
                                </div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={`/hobbies`}>
                                <div
                                    className={activePage === "hobbies" ? "link active" : "link"}
                                    onClick={() => { updateState("hobbies") }}
                                >
                                    My Hobbies
                                </div>
                            </Link>
                        </Nav.Link>
{/*
                        <Nav.Link>
                            <Link to={`/contact`}>
                                <div
                                    className={activePage === "contact" ? "link active" : "link"}
                                    onClick={() => { updateState("contact") }}
                                >
                                    Contact Me
                                </div>
                            </Link>
                        </Nav.Link>*/}
{/* 
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </Nav.Link>
       */}
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;