import React, {Component, Fragment} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default class TopNavigation extends Component{
    render() {
        return(
            <Fragment>
                <Navbar collapseOnSelect fixed={'top'} expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">React App From Scratch</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Home</Nav.Link>
                                <Nav.Link href="#deets">About</Nav.Link>
                                <Nav.Link href="#deets">Service</Nav.Link>
                                <Nav.Link href="#deets">Courses</Nav.Link>
                                <Nav.Link href="#deets">Portfolio</Nav.Link>
                                <Nav.Link href="#deets">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}