import React, {Component, Fragment} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class ContactSection extends Component{
    constructor() {
        super();
        this.state={
            address:'...',
            email:'....',
            phone:'.....'
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.FooterData).then(result=>{
            this.setState({address:result[0]['address'],email:result[0]['email'],
                phone:result[0]['phone']})
        })
    }
    sendContact(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        // alert(name+'/'+email+'/'+message);
        let jsonObject = {name:name,email:email,message:message}
        RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject))
            .then(result=>alert(result))
            .catch(error=>alert('error'));
    }

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
                                    <Form.Control type={'text'} id={'name'} placeholder={'enter your name'} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" id={'email'} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className={'mb-2'}>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as={'textarea'} id={'message'} rows={3} />
                                </Form.Group>

                                <Button onClick={this.sendContact} variant="primary">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className={'serviceName'}>Discuss Now</h1>
                            <p className={'serviceDescription'}>
                                Address: {this.state.address} <br/>
                                <FontAwesomeIcon icon={faEnvelope} />Email: {this.state.email} <br/>
                                <FontAwesomeIcon icon={faPhone} />Phone: {this.state.phone}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}