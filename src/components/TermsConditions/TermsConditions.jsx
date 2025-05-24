import React, {Component, Fragment} from "react";
import {CardImgOverlay, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

export default class TermsConditions extends Component{

    constructor() {
        super();
        this.state={
            loading:true,
            error:false,
            termsConditions:'....',

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            if(result == null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({termsConditions:result[0]['terms'],loading:false})
            }
        }).catch(error =>{
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
                                <h3 className={'serviceName'}>Terms and Conditions</h3>
                                <hr/>
                                <p className={'serviceDescription'}>
                                    <ol>
                                        {this.state.termsConditions}
                                    </ol>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.error === true){
            return(
                <WentWrong/>
            )
        }
    }
}