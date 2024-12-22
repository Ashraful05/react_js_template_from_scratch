import React from "react";
import {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

export default class AllCoursePage extends Component{
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