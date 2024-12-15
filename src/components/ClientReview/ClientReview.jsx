import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class ClientReview extends Component{
    render() {
        const settings = {
            autoPlay: true,
            autoplaySpeed: 500,
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container fluid={true} className={'sliderBack text-center'}>
                    <h1 className={'reviewMainTitle p-3'}>Testimonial</h1>
                    <div className={'reviewBottom'}></div>
                    <Slider {...settings}>
                        <div>
                            <Row className={'text-center justify-content-center'}>
                                <Col lg={6} md={6} sm={12}>
                                    <img className={'circleImage'} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                    <h2 className={'reviewName'}>Ashraful</h2>
                                    <p className={'reviewDescription'}>I can design and develop Ecommerce online website.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className={'text-center justify-content-center'}>
                                <Col lg={6} md={6} sm={12}>
                                    <img className={'circleImage'} src="https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-175788.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                    <h2 className={'reviewName'}>Ashraful</h2>
                                    <p className={'reviewDescription'}>I can design and develop Ecommerce online website.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className={'text-center justify-content-center'}>
                                <Col lg={6} md={6} sm={12}>
                                    <img className={'circleImage'} src="https://img.freepik.com/premium-vector/man-with-brown-eyes-red-background-that-says-hes-man_1230457-37458.jpg?ga=GA1.1.236297427.1733904633&semt=ais_hybrid" alt=""/>
                                    <h2 className={'reviewName'}>Ashraful</h2>
                                    <p className={'reviewDescription'}>I can design and develop Ecommerce online website.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>

        );
    }
}