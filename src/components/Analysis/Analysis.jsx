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
            data:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Charts).then(result=>{
            this.setState({data:result})
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br/><br/><br/>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <br/><br/>
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}