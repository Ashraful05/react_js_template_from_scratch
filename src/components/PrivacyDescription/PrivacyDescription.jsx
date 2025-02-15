import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class PrivacyDescription extends Component{
    constructor() {
        super();
        this.state={
            privacyDescription:'.....'
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({privacyDescription:result[0]['privacy']})
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={'serviceName'}>Privacy Description</h3>
                            <hr/>
                            <p className={'serviceDescription'}>
                                <ol>
                                    {this.state.privacyDescription}
                                </ol>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}