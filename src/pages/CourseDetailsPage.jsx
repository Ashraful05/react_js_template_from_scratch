import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import RestClient from "../RestApi/RestClient";
import AppUrl from "../RestApi/AppUrl";

export default class CourseDetailsPage extends Component{

    constructor({match}) {
        super();
        this.state={
            courseBasedId:match.params.courseID,
            courseName:match.params.courseName,
            courseData:[],
        }
    }

    componentDidMount() {
        window.scroll(0,0);
        RestClient.GetRequest(AppUrl.CourseDetails + this.state.courseBasedId)
            .then(result => {
            this.setState({courseData:result});
        })
    }

    render() {
        return(
            <Fragment>
                <TopNavigation title={'Course Details'}/>
                <PageTop pagetitle={this.state.courseName} />
                <CourseDetails courseReleatedData={this.state.courseData}/>
                <Footer/>
            </Fragment>
        )
    }
}