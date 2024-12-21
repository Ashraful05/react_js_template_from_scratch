import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

export default class AllProject extends Component{
    render() {
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>Recent Projects</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={'projectCard'}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/laptop-technology-with-book-statistics-bar_24877-53125.jpg?t=st=1733905369~exp=1733908969~hmac=6b3bc840a1388455044c94e7a455cde1db417afa4b64e200fae6fd7241fc3388&w=740" />
                                <Card.Body>
                                    <Card.Title className={'serviceName'}>Project Name One</Card.Title>
                                    <Card.Text className={'serviceDescription'}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={'projectCard'}>
                                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/2d-vector-illustration-graduation-success-college-study-training-courses-school-educational_918459-25772.jpg?semt=ais_hybrid" />
                                <Card.Body>
                                    <Card.Title className={'serviceName'}>Project Name Two</Card.Title>
                                    <Card.Text className={'serviceDescription'}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={'projectCard'}>
                                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/2d-vector-illustration-graduation-success-college-study-training-courses-school-educational_918459-25775.jpg?semt=ais_hybrid" />
                                <Card.Body>
                                    <Card.Title className={'serviceName'}>Project Name Three</Card.Title>
                                    <Card.Text className={'serviceDescription'}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={'projectCard'}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/laptop-technology-with-book-statistics-bar_24877-53125.jpg?t=st=1733905369~exp=1733908969~hmac=6b3bc840a1388455044c94e7a455cde1db417afa4b64e200fae6fd7241fc3388&w=740" />
                                <Card.Body>
                                    <Card.Title className={'serviceName'}>Project Name One</Card.Title>
                                    <Card.Text className={'serviceDescription'}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={'projectCard'}>
                                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/2d-vector-illustration-graduation-success-college-study-training-courses-school-educational_918459-25772.jpg?semt=ais_hybrid" />
                                <Card.Body>
                                    <Card.Title className={'serviceName'}>Project Name Two</Card.Title>
                                    <Card.Text className={'serviceDescription'}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={'projectCard'}>
                                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/2d-vector-illustration-graduation-success-college-study-training-courses-school-educational_918459-25775.jpg?semt=ais_hybrid" />
                                <Card.Body>
                                    <Card.Title className={'serviceName'}>Project Name Three</Card.Title>
                                    <Card.Text className={'serviceDescription'}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}