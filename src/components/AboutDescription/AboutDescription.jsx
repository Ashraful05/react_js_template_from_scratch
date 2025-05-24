import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from "html-react-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";



export default class AboutDescription extends Component{
    constructor() {
        super();
        this.state={
            aboutDescription:'.....',
            loading:true,
            error:false,
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            if(result == null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({
                    aboutDescription:result[0]['about'],
                    loading:false,
                })
            }

        }).catch(error => {
            this.setState({error:true})
        })
    }

    render() {
        if(this.state.loading===true){
            return <Loading />
        }else if (this.state.error === false){
            return(
                <Fragment>
                    <Container className={'mt-5'}>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <h1 className={'serviceName'}>Who Am I</h1><hr/>
                                <p className={'serviceDescription'}>
                                    {parse(this.state.aboutDescription)}
                                </p><br/>
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
        else if(this.state.error === true){
            return <WentWrong/>
        }

    }
}