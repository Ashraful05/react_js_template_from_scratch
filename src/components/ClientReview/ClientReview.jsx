import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class ClientReview extends Component{

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result =>{
            this.setState({myData:result});
        })
    }

    render() {
        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <div>
                <Row className={'text-center justify-content-center'}>
                    <Col lg={6} md={6} sm={12}>
                        <img className={'circleImage'} src={myList.client_image} alt=""/>
                        <h2 className={'reviewName'}>{myList.client_title}</h2>
                        <p className={'reviewDescription'}>{myList.client_description}.</p>
                    </Col>
                </Row>
            </div>
        })
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
                        { myView }
                    </Slider>
                </Container>
            </Fragment>

        );
    }
}