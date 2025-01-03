import React from "react";
import {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class AllCourses extends Component{
    render() {
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>My Courses</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className={'p-2'}>
                                    <img className={'courseImage'} src="https://img.freepik.com/free-psd/e-learning-banner-design-template_23-2149113592.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12} >
                                    <h4 className={'text-center serviceName'}>PHP</h4>
                                    <p className={'text-center serviceDescription'}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='courseViewMore float-lg-none' to={'/coursedetails'}>View Details</Link>
                                </Col>
                                <Col lg={6} md={6} sm={12} className={'p-2'}>
                                    <img className={'courseImage'} src="https://img.freepik.com/free-vector/laptop-technology-with-cap-graduation-digital-document_24877-53136.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className={'text-center serviceName'}>Laravel</h4>
                                    <p className={'text-center serviceDescription'}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='courseViewMore float-lg-none' to={'/coursedetails'}>View Details</Link>
                                </Col>
                                <Col lg={6} md={6} sm={12} className={'p-2'}>
                                    <img className={'courseImage'} src="https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className={'text-center serviceName'}>Laravel</h4>
                                    <p className={'text-center serviceDescription'}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='courseViewMore float-lg-none' to={'/coursedetails'}>View Details</Link>
                                </Col>
                            </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className={'p-2'}>
                                    <img className={'courseImage'} src="https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12} >
                                    <h4 className={'text-center serviceName'}>JavaScript</h4>
                                    <p className={'text-center serviceDescription'}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='courseViewMore float-lg-none' to={'/coursedetails'}>View Details</Link>
                                </Col>
                                <Col lg={6} md={6} sm={12} className={'p-2'}>
                                    <img className={'courseImage'} src="https://img.freepik.com/premium-vector/elearning-icon-3d-illustration-from-elearning-collection-creative-elearning-3d-icon-web-design-templates-infographics-more_676904-770.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12} >
                                    <h4 className={'text-center serviceName'}>React JS</h4>
                                    <p className={'text-center serviceDescription'}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='courseViewMore float-lg-none' to={'/coursedetails'}>View Details</Link>
                                </Col>
                                <Col lg={6} md={6} sm={12} className={'p-2'}>
                                    <img className={'courseImage'} src="https://img.freepik.com/free-vector/laptop-technology-with-cap-graduation-digital-document_24877-53136.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12} >
                                    <h4 className={'text-center serviceName'}>React JS</h4>
                                    <p className={'text-center serviceDescription'}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='courseViewMore float-lg-none' to={'/coursedetails'}>View Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}