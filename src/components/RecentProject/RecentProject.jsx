import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

export default class RecentProject extends Component{

    constructor() {
        super();
        this.state={
            myData:[],
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Projects).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={6} sm={12}>
                <Card className={'projectCard'}>
                    <Card.Img variant="top" src={myList.image_one} />
                    <Card.Body>
                        <Card.Title className={'serviceName'}>{myList.project_name}</Card.Title>
                        <Card.Text className={'serviceDescription'}>
                            {myList.project_description}.
                        </Card.Text>
                        <Button variant="primary"><Link className={'linkStyle'} to={'/projectdetails/'+myList.id+"/"+myList.project_name}>View More</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        })
        return(
            <Fragment>
                <Container className={'text-center'}>
                    <h1 className={'serviceMainTitle'}>Recent Projects</h1>
                    <div className={'bottom'}></div>
                    <Row>
                        { myView }
                    </Row>
                </Container>
            </Fragment>
        )
    }
}