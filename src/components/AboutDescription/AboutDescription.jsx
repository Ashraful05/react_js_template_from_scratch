import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";

export default class AboutDescription extends Component{
    render() {
        return(
            <Fragment>
                <Container className={'mt-5'}>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className={'serviceName'}>Who Am I</h1><hr/>
                            <p className={'serviceDescription'}>jklkjalkfasfadfa
                            adfadfafdafafdqter
                            dasfasfdafasf
                            adfadfafdasfasd</p><br/>
                            <h1 className={'serviceName'}>Our Mission</h1><hr/>
                            <p className={'serviceDescription'}>jklkjalkfasfadfa
                            adfadfafdafafdqter
                            dasfasfdafasf
                            adfadfafdasfasd</p><br/>
                            <h1 className={'serviceName'}>Our Vision</h1><hr/>
                            <p className={'serviceDescription'}>jklkjalkfasfadfa
                            adfadfafdafafdqter
                            dasfasfdafasf
                            adfadfafdasfasd</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}