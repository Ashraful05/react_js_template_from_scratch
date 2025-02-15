import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";



export default class AboutDescription extends Component{
    constructor() {
        super();
        this.state={
            aboutDescription:'.....'
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({aboutDescription:result[0]['about']})
        })
    }

    render() {
        return(
            <Fragment>
                <Container className={'mt-5'}>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className={'serviceName'}>Who Am I</h1><hr/>
                            <p className={'serviceDescription'}>{this.state.aboutDescription}
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