import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import WelCome from "../components/WelCome/WelCome";

export default class HomePage extends Component{
    render() {
        return (
            <Fragment>
                <TopNavigation title={'React JS From Scratch'}/>
                <TopBanner/>
                <WelCome/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProject/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <AboutMe/>
                <Footer/>
            </Fragment>
        );
    }
}