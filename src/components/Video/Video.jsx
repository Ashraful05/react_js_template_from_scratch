import React, {Component, Fragment} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';


export default class Video extends Component{

    constructor() {
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show: true})

    render() {
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>Our Videos</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className={'videoText'}>
                            <p className={'serviceDescription text-justify'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/><br/>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className={'videoCard'}>
                            <FontAwesomeIcon  size={'3x'} onClick={this.modalOpen} icon={faVideoSlash}  className={'iconProject'}/>
                        </Col>
                    </Row>
                </Container>
                <Modal size={'lg'} show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}