import React, {Component, Fragment} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import {BigPlayButton, Player} from "video-react";
import parse from "html-react-parser";


export default class CourseDetails extends Component{

    constructor(props) {
        super();
    }
    render() {
        let short_title = '';
        let short_description = '';
        let small_image = '';
        let long_title = '';
        let long_description = '';
        let total_duration = '';
        let total_lecture = '';
        let total_student = '';
        let video_url = '';
        let skill_all = '';

        let courseData = this.props.courseReleatedData;
        // console.log(courseData);
        if(courseData.length == 1){
            long_title= courseData[0]['long_title'];
            long_description= courseData[0]['long_description'];
            total_duration= courseData[0]['total_duration'];
            total_lecture= courseData[0]['total_lecture'];
            total_student= courseData[0]['total_student'];
            video_url= courseData[0]['video_url'];
            skill_all= courseData[0]['skill_all'];
            small_image= courseData[0]['small_image'];
        }


        return(
            <Fragment>
                <Container className={'mt-5'}>
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <h1 className={'courseDetailsText'}>{long_title}.</h1>
                            <img className={'courseDetailsImage'} src={small_image} alt=""/>
                            <p className={'courseDescription mt-2'}>
                                {parse(long_description)}
                            </p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={'widget widget_feature'}>
<h4 className={'widget-title text-center'}>Course Features</h4><hr/>
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faUser} /><span>Enrolled :</span> {total_student} students</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClock} /><span>Duration :</span> {total_duration} hours</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /><span>Lectures :</span> {total_lecture}</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClone} /><span>Categories:</span> Technology</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faTags} /><span>Tags:</span> Android, JavaScript</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /><span>Instructor:</span> Ethan Dean</li>
                                </ul>
                                <div className="price-wrap text-center">
                                    <h5>Price:<span>$54.00</span></h5>
                                    <Button variant="warning">ENROLL COURSE</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className={'mt-5'}>
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <div className={'widget_feature'}>
                                <h1 className={'courseDetailsText'}>Skills You Need</h1><hr/>
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenas</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Fringilla nulla</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenas</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player src={video_url}>
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}