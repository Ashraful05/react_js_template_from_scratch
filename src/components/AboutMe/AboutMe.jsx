import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import face from '../../asset/image/face.png';

import TypewriterComponent from "typewriter-effect";

export default class AboutMe extends Component{

    render() {
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>About Me</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className={'aboutMeImage'}>
                                <img className={'aboutImage'} src={face} alt=""/>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className={'aboutMeBody'}>
                                <h2 className={'aboutMeDetails'}>Hi there, i'm</h2>
                                <h2 className={'aboutMeTitle'}>Ashraful</h2>
                                <h3 className={'aboutMeDetails'}>
                                    Works as
                                    <span id={''}>
                                       <TypewriterComponent

                                           options={{
                                               strings:['Web App Developer!', 'Online Trainer!'],
                                               autoStart:true,
                                               delay:75,
                                               loop:true
                                           }}

                                       />
                                    </span>
                                </h3>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}