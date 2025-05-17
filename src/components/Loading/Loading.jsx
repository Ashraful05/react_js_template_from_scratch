import React, {Component, Fragment} from "react";
import {Col, Row} from "react-bootstrap";
import LoaderIcon from '../../asset/image/loader_1.svg';

export default class Loading extends Component{
    render() {
        return(
            <Fragment>
                <Row>
                    <Col>
                        <img className='LoaderAnimation' src={LoaderIcon} alt=""/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}