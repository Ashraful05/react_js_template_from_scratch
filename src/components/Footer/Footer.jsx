import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component{
    render() {
        return(
            <Fragment>
                <Container fluid={true} className={'footerSection'}>
                    <Row>
                        <Col lg={3} md={6} sm={12} className={'p-5 text-center'}>
                            <h2 className={'footerName text-center'}>Follow Us </h2>
                               <div className={'social-container'}>
                                   <a href="" className={'facebook social'}><FontAwesomeIcon icon={faFacebook} size={'2x'}/></a>
                                   <a href="" className={'youtube social'}><FontAwesomeIcon icon={faYoutube} size={'2x'}/></a>
                                   <a href="" className={'twitter social'}><FontAwesomeIcon icon={faTwitter} size={'2x'}/></a>
                               </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={'p-5 text-justify'}>
                            <h2 className={'footerName'}>Address</h2>
                            <p className={'footerDescription'}>
                                Munsipara, Saidpur, Nilphamari
                                <FontAwesomeIcon icon={faEnvelope}/> Email: support@gmail.com <br/>
                                <FontAwesomeIcon icon={faPhone}/> Phone: +8801233343333
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={'p-5 text-justify'}>
                            <h2 className={'footerName'}>Information</h2>
                            <a href="" className={'footerLink'}>About Me</a><br/>
                            <a href="" className={'footerLink'}>Company Profile</a><br/>
                            <a href="" className={'footerLink'}>Contact Us</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={'p-5 text-justify'}>
                            <h2 className={'footerName'}>Policy</h2>
                            <a href="" className={'footerLink'}>Refund Policy</a><br/>
                            <a href="" className={'footerLink'}>Terms & Conditions</a><br/>
                            <a href="" className={'footerLink'}>Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className={'text-center copyRightSection'}>
                    <a href="" className={'copyRightLink'}>@ Copyright 2024 by AshTech, All rights Reserved.</a>
                </Container>
            </Fragment>
        )
    }
}