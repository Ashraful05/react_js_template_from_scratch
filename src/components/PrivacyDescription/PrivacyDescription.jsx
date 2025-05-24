import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

export default class PrivacyDescription extends Component{
    constructor() {
        super();
        this.state={
            privacyDescription:'.....',
            loading:true,
            error:false,
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            if(result == null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({privacyDescription:result[0]['privacy'],loading:false})
            }
        }).catch(error => {
            this.setState({error:true})
        })
    }

    render() {
        if(this.state.loading === true){
            return <Loading/>
        }else if(this.state.error === false){
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
        }else if (this.state.error === true){
            return (
                <WentWrong/>
            )
        }

    }
}