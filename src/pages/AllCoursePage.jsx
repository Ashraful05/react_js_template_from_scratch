import React from "react";
import {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

export default class AllCoursePage extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return(
            <Fragment>
                <TopNavigation title={'All Course'} />
                <PageTop pagetitle={'All Course'}/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        )
    }
}