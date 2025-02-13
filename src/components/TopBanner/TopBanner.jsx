import React, {Component, Fragment} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";


export default class TopBanner extends Component{

    constructor() {
        super();
        this.state={
            title:'',
            subtitle:''
        }
    }

    componentDidMount() {
        // axios.get('http://127.0.0.1:8000/api/title')
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        RestClient.GetRequest(AppUrl.Title).then(response=>{
            this.setState({title:response[0]['home_title'],subtitle:response[0]['home_subtitle']});
        }).catch(error=>{
            this.setState({title:'????',subtitle:'?????'})
        });

    }

    render() {
        return(
            <Fragment>
                <Container fluid={true} className={'topFixedBanner p-0'}>
                    <div className={'topBannerOverlay'}>
                        <Container className={'topContent'}>
                            <Row>
                                <Col className={'text-center'}>
                                    <h1 className={'topTitle'}>{this.state.title}</h1>
                                    <h3 className={'topSubTitle'}>{this.state.subtitle}</h3>
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