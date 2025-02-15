import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import data from "bootstrap/js/src/dom/data";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class Analysis extends Component{

    constructor() {
        super();
        this.state={
            data:[],
            techDescription:'....',
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Charts).then(result=>{
            this.setState({data:result})
        })
        RestClient.GetRequest(AppUrl.HomePageTitle).then(result=>{
            this.setState({techDescription:result[0]['tech_description']})
        })

    }

    render() {
        var blue = '#051b35';
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>Technology Used</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12} >
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip/>
                                    <Bar dataKey={'Projects'} fill={blue}>

                                    </Bar>

                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className={'text-justify serviceDescription'}>
                                {this.state.techDescription}. <br/>
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}