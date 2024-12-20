import React, {Component, Fragment} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';


export default class TopNavigation extends Component{

    constructor() {
        super();
        this.state={
            navBarTitle:'navTitle',
            navBarLogo:[whiteLogo],
            navVariant:'dark',
            navBarBack:'navBarBackground',
            navBarItem:'navItem'
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle: 'navTitleScroll',navBarLogo:[blackLogo],
                navBarBack:'navBarBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitleScroll',navBarLogo:[whiteLogo],
                navBarBack:'navBarBackground',navBarItem:'navItem',navVariant:'dark'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }

    render() {
        return(
            <Fragment>
                <Navbar collapseOnSelect fixed={'top'} expand="lg" className={this.state.navBarBack} variant={this.state.navVariant}>
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.navBarTitle}><img src={this.state.navBarLogo} alt=""/>React App From Scratch</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav className={this.state.navBarItem}>
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