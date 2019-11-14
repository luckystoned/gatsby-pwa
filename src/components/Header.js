import React from "react"
import {Navbar, Nav} from "react-bootstrap" 
import {Link} from "gatsby"
export default (props) => (
    <header>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Gastby-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to ="/">
                    <b>Home</b>
                </Nav.Link>
                <Nav.Link as={Link} to ="/about">
                    <b>About Us</b>
                </Nav.Link>
                <Nav.Link as={Link} to ="/contact">
                    <b>Contac Us</b>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)