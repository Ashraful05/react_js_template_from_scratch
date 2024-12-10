import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

export default class Summary extends Component{
    render() {
        return(
            <Fragment>
                <Container fluid={true} className={'summaryBanner p-0'}>
                    <div className={'summaryBannerOverlay'}>
                        <Container className={'text-center'}>
                            <Row>
                                <Col lg={7} md={6} sm={12} >
                                    <Row className={'mt-lg-5 mt-md-5 mt-sm-5'}>
                                        <Col>
                                            <FontAwesomeIcon icon={faGlobe} className={'iconSize'} />
                                            <h1 className={'countNumber'}>
                                                <CountUp start={0} end={3000}>
                                                    {
                                                        ({countUpRef,start})=>(
                                                            <ReactVisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </ReactVisibilitySensor>


                                                        )
                                                    }
                                                </CountUp>
                                            </h1>
                                            <h4 className={'countTitle'}>Students Worldwide</h4>
                                            <hr className={'bg_white w-30'} />
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon icon={faLaptop} className={'iconSize'}/>
                                            <h1 className={'countNumber'}>
                                                <CountUp start={0} end={22}>
                                                    {
                                                        ({countUpRef,start})=>(
                                                            <ReactVisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </ReactVisibilitySensor>


                                                        )
                                                    }
                                                </CountUp>
                                            </h1>
                                            <h4  className={'countTitle'}>Courses Published</h4>
                                            <hr className={'bg_white w-30'} />
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon icon={faStar} className={'iconSize'}/>
                                            <h1 className={'countNumber'}>
                                                <CountUp start={0} end={5000}>
                                                    {
                                                        ({countUpRef,start})=>(
                                                            <ReactVisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </ReactVisibilitySensor>


                                                        )
                                                    }
                                                </CountUp>
                                            </h1>
                                            <h4  className={'countTitle'}>Student Reviews</h4>
                                            <hr className={'bg_white w-30'} />
                                        </Col>
                                    </Row>
                                </Col>


                                <Col lg={5} md={6} sm={12}>

                                    <Card className={'workCard'}>

                                        <Card.Body>
                                            <Card.Title className={'cardTitle'}>What I Have Achieved</Card.Title>
                                            <Card.Text>
                                                <p className={'cardSubTitle text-justify'}><FontAwesomeIcon className={'iconBullet'} icon={faCheckSquare} /> Requirement Gathering</p>
                                                <p className={'cardSubTitle text-justify'}><FontAwesomeIcon className={'iconBullet'} icon={faCheckSquare} /> System Analysis</p>
                                                <p className={'cardSubTitle text-justify'}><FontAwesomeIcon className={'iconBullet'} icon={faCheckSquare} /> Coding Testing</p>
                                                <p className={'cardSubTitle text-justify'}><FontAwesomeIcon className={'iconBullet'} icon={faCheckSquare} /> Implementation</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        )
    }
}