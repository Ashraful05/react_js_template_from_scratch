import React, {Component, Fragment} from "react";
import {Container,Row,Col} from "react-bootstrap";
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";


export default class Services extends Component{

    constructor() {
        super();
        this.state={
            myData:[],
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Services).then(result=>{
            this.setState({myData:result});
        });
    }

    render() {
        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={6} sm={12}>
                <div className={'serviceCard text-center'}>
                    <img className={'ecommerceIcon'} src={myList.service_logo} alt=""/>
                    <h2 className={'serviceName'}>{myList.service_name}</h2>
                    <p className={'serviceDescription'}>{myList.service_description}.</p>
                </div>
            </Col>
        })
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>My Services</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        { myView }
                    </Row>

                </Container>
            </Fragment>
        )
    }
}