import React from "react";
import {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

export default class AllCourses extends Component{
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false,
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.AllCourse).then(result=>{
            if(result == null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({myData:result, loading:false})
            }

        })
    }

    render() {

        if(this.state.loading === true && this.state.error === false){
            return <Loading />
        }
            const myList = this.state.myData;
            const myView = myList.map(myList=>{
                return <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className={'p-2'}>
                            <img className={'courseImage'} src={myList.small_image} alt=""/>
                        </Col>
                        <Col lg={6} md={6} sm={12} >
                            <h4 className={'text-center serviceName'}>{myList.short_title}</h4>
                            <p className={'text-center serviceDescription'}>{myList.short_description}.</p>
                            <Link className='courseViewMore float-lg-none'to={'/coursedetails/'+myList.id+'/'+myList.short_title}>View Details</Link>
                        </Col>
                    </Row>

                </Col>
            })
         else if (this.state.error === false) {

            return (
                <Fragment>
                    <Container className={'text-center'}>
                        <h1 className={'serviceMainTitle'}>My Courses</h1>
                        <div className={'bottom'}></div>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            )
        }
        }

    }
}