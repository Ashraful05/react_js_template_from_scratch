import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";

export default class AboutPage extends Component{
    render() {
        return(
            <Fragment>
                <TopNavigation title={'About Us'}/>
                <PageTop pagetitle={'About Us'}/>
                <AboutMe/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        )
    }
}