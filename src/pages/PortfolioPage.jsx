import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProject from "../components/AllProjects/AllProject";
import Footer from "../components/Footer/Footer";

export default class PortfolioPage extends Component{
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle={'Our Portfolio Page'}/>
                <AllProject/>
                <Footer/>
            </Fragment>
        );
    }
}