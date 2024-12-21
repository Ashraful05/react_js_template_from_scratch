import React, {Component, Fragment} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export default class ContactSection extends Component{
    render() {
        return(
            <Fragment>
                <Container className={'mt-5'}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className={'serviceName'}>Quick Contact</h1>
                            <Form>

                                <Form.Group className={'mb-3'}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type={'text'} placeholder={'enter your name'} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className={'mb-2'}>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as={'textarea'} rows={3} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className={'serviceName'}>Discuss Now</h1>
                            <p className={'serviceDescription'}>
                               Saidpur, Nilphamari <br/>
                                <FontAwesomeIcon icon={faEnvelope} />Email: support@mail.com <br/>
                                <FontAwesomeIcon icon={faPhone} />Phone: 3548906545
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}