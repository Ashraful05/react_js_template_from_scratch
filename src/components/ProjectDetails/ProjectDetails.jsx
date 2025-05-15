import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import projectDetails from '../../asset/image/pdetails.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import parse from 'html-react-parser';

export default class ProjectDetails extends Component{

    constructor(props){
        super();
        this.state={
            myProjectId:props.id,
            image_two:'...',
            project_name:'...',
            project_description:'....',
            project_features:'....',
            live_preview:'.....'

        }
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.myProjectId).then((result)=>{
            this.setState({
                image_two:result[0]['image_two'],
                project_name:result[0]['project_name'],
                project_description:result[0]['project_description'],
                project_features:result[0]['project_features'],
                live_preview:result[0]['live_preview'],
            })
        })
    }

    render() {
        return(
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="about-thumb-wrap after-shape">
                                <img src={this.state.image_two} alt=""/>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="mt-5">
                            <div className="project-details">
                                <h1 className="projectDetailsText">
                                     {this.state.project_name}
                                    </h1>
                                <p className="detailsName">
                                     {parse(this.state.project_description)}
                                </p>
                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> 
                                    {parse(this.state.project_features)}
                               </p>
                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> 
                                    {parse(this.state.live_preview)}
                               </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}