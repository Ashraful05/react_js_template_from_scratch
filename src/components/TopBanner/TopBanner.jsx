import React, {Component, Fragment} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export default class TopBanner extends Component{
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