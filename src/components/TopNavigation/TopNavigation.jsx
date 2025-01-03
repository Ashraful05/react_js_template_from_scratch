import React, {Component, Fragment} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import {Link,NavLink} from "react-router-dom";


export default class TopNavigation extends Component{

    constructor(props) {
        super();
        this.state={
            navBarTitle:'navTitle',
            navBarLogo:[whiteLogo],
            navVariant:'dark',
            navBarBack:'navBarBackground',
            navBarItem:'navItem',
            pageTitle: props.title,
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
                <title>{this.state.pageTitle}</title>
                <Navbar collapseOnSelect fixed={'top'} expand="lg" className={this.state.navBarBack} variant={this.state.navVariant}>
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.navBarTitle}><NavLink to={'/'} style={{ textDecoration: 'none' }}><img src={this.state.navBarLogo} alt=""/>React App From Scratch</NavLink> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav className={this.state.navBarItem}>
                                <Nav.Link><NavLink style={({isActive})=> {
                                    return {color:isActive?'#ffd900':''}
                                }} className={this.state.navBarItem} to="/">Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink style={({isActive})=>{return{color:isActive?'#ffd900':''}}} className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>
                                <Nav.Link><NavLink style={({isActive})=>{return{color:isActive?'#ffd900':''}}} className={this.state.navBarItem} to="/service">Service</NavLink></Nav.Link>
                                <Nav.Link><NavLink style={({isActive})=>{return{color:isActive?'#ffd900':''}}} className={this.state.navBarItem} to="/course">Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink style={({isActive})=>{return{color:isActive?'#ffd900':''}}} className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink style={({isActive})=>{return{color:isActive?'#ffd900':''}}} className={this.state.navBarItem} to="/contact">Contact Us</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}