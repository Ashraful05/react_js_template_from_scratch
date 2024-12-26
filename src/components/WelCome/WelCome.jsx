import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';
import imageone from '../../asset/image/19.png';
import imagetwo from '../../asset/image/20.png';
import imagethree from '../../asset/image/21.png';

export default class WelCome extends Component{
    render() {
        return(
            <Fragment>
                <div className={'intro-inner--top'}>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className={'section-title text-center'}>
                                    <div className={'intro-area-inner'}>
                                        <h6 className={'sub-title double-line'}>WelCome</h6>
                                        <h2 className={'maintitle'}>An Exemplary <br/> Learning Community</h2>

                                        <Container className={'text-center mt-5'}>
                                            <Row>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={pageone} alt=""/>
                                                    <h1 className={'serviceName'}>Postgraduate</h1>
                                                    <p className={'serviceDescription'}>Lorem ipsum dolor</p>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={pagetwo} alt=""/>
                                                    <h1 className={'serviceName'}>Postgraduate</h1>
                                                    <p className={'serviceDescription'}>Lorem ipsum dolor</p>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={pagethree} alt=""/>
                                                    <h1 className={'serviceName'}>Postgraduate</h1>
                                                    <p className={'serviceDescription'}>Lorem ipsum dolor</p>
                                                </Col>
                                            </Row>

                                            <Row className={'intro-footer bg-base text-center mt-5'}>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img src={imageone} className={'sideImg'} alt=""/>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className={'homeIntro'}>Development</h5>
                                                            <p className={'serviceDescription'}>Lorem ipsum dolor</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img src={imagetwo} className={'sideImg'} alt=""/>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className={'homeIntro'}>Design</h5>
                                                            <p className={'serviceDescription'}>Lorem ipsum dolor</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img src={imagethree} className={'sideImg'} alt=""/>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className={'homeIntro'}>Ecommerce</h5>
                                                            <p className={'serviceDescription'}>Lorem ipsum dolor</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}