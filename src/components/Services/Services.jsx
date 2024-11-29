import React, {Component, Fragment} from "react";
import {Container,Row,Col} from "react-bootstrap";
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';

export default class Services extends Component{
    render() {
        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <img className={'ecommerceIcon'} src={ecommerceIcon} alt=""/>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <img className={'designIcon'} src={designIcon} alt=""/>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div>
                                <img className={'webIcon'} src={webIcon} alt=""/>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}