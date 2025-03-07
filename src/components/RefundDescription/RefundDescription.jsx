import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class RefundDescription extends Component{
    constructor() {
        super();
        this.state={
            refundPolicy:'.....'
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({refundPolicy:result[0]['refund']})
        })
    }

    render() {
        return(
            <Fragment>
                <Container className={'mt-3'}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={'serviceName'}>Refund Policy</h3>
                            <hr/>
                            <p className={'serviceDescription'}>
                                <ol>
                                    <li>{this.state.refundPolicy}</li>
                                </ol>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}