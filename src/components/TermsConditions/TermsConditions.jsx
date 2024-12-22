import React, {Component, Fragment} from "react";
import {CardImgOverlay, Col, Container, Row} from "react-bootstrap";

export default class TermsConditions extends Component{
    render() {
        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={'serviceName'}>Terms and Conditions</h3>
                            <hr/>
                            <p className={'serviceDescription'}>
                                <ol>
                                    <li>Your item must be unused and in the same condition that you received it.</li>
                                    <li>The item must be in the original packaging.</li>
                                    <li>To complete your return, we require a receipt or proof of purchase.</li>
                                    <li>Only regular priced items may be refunded, sale items cannot be refunded.</li>
                                    <li>If the item in question was marked as a gift when purchased and shipped directly to you, you will receive a gift credit for the value of your return.</li>
                                </ol>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        )
    }
}