import React, {Component, Fragment} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import axios from "axios";


export default class TopBanner extends Component{

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/title')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return(
            <Fragment>
                <Container fluid={true} className={'topFixedBanner p-0'}>
                    <div className={'topBannerOverlay'}>
                        <Container className={'topContent'}>
                            <Row>
                                <Col className={'text-center'}>
                                    <h1 className={'topTitle'}>React JS Project</h1>
                                    <h3 className={'topSubTitle'}>From Scratch</h3>
                                    <Button>Learn More...</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}