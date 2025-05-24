import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from "html-react-parser";
import WentWrong from "../WentWrong/WentWrong";

export default class Footer extends Component{
    constructor() {
        super();
        this.state={
            facebook:'....',
            twitter:'....',
            youtube:'....',
            address:'...',
            email:'....',
            phone:'.....',
            loading:true,
            error:false,
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.FooterData).then(result=>{
            if(result==null){
                this.setState({error:true})
            }else{
                this.setState({
                    facebook:result[0]['facebook'],twitter:result[0]['twitter'],youtube:result[0]['youtube'],
                    address:result[0]['address'],email:result[0]['email'],phone:result[0]['phone']
                })
            }

        })
    }
    render() {
        if(this.state.error === false){
            return(
                <Fragment>
                    <Container fluid={true} className={'footerSection'}>
                        <Row>
                            <Col lg={3} md={6} sm={12} className={'p-5 text-center'}>
                                <h2 className={'footerName text-center'}>Follow Us </h2>
                                <div className={'social-container'}>
                                    <a href={this.state.facebook} className={'facebook social'}><FontAwesomeIcon icon={faFacebook} size={'2x'}/></a>
                                    <a href={this.state.youtube} className={'youtube social'}><FontAwesomeIcon icon={faYoutube} size={'2x'}/></a>
                                    <a href={this.state.twitter} className={'twitter social'}><FontAwesomeIcon icon={faTwitter} size={'2x'}/></a>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className={'p-5 text-justify'}>
                                <h2 className={'footerName'}>Address</h2>
                                <p className={'footerDescription'}>
                                    { parse(this.state.address) }
                                    <FontAwesomeIcon icon={faEnvelope}/> {parse(this.state.email)} <br/>
                                    <FontAwesomeIcon icon={faPhone}/> {parse(this.state.phone)}
                                </p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className={'p-5 text-justify'}>
                                <h2 className={'footerName'}>Information</h2>
                                <Link to={'/about'} className={'footerLink'}>About Me</Link><br/>
                                <a href="" className={'footerLink'}>Company Profile</a><br/>
                                <Link to={'/contact'} className={'footerLink'}>Contact Us</Link>
                            </Col>
                            <Col lg={3} md={6} sm={12} className={'p-5 text-justify'}>
                                <h2 className={'footerName'}>Policy</h2>
                                <Link to={'/refund'} className={'footerLink'}>Refund Policy</Link><br/>
                                <Link to={'/terms'} className={'footerLink'}>Terms & Conditions</Link><br/>
                                <Link to={'/privacy'} className={'footerLink'}>Privacy Policy</Link>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className={'text-center copyRightSection'}>
                        <a href="" className={'copyRightLink'}>@ Copyright 2024 by AshTech, All rights Reserved.</a>
                    </Container>
                </Fragment>
            )
        }else{
            return <WentWrong/>
        }

    }
}