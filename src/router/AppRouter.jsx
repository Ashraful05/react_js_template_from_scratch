import React, {Component, Fragment} from "react";
import {
    createBrowserRouter, Route,
    RouterProvider, Routes,Switch,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllServicePage from "../pages/AllServicePage";
import AllCoursePage from "../pages/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import RefundPage from "../pages/RefundPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import PrivacyDescriptionPage from "../pages/PrivacyDescriptionPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

export default class AppRouter extends Component{
    render() {
        return(
            <Fragment>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/service'} component={AllServicePage} />
                    <Route path={'/course'} component={AllCoursePage} />
                    <Route path={'/portfolio'} component={PortfolioPage} />
                    <Route path={'/about'} component={AboutPage}/>
                    <Route path={'/contact'} component={ContactPage} />
                    <Route path={'/refund'} component={RefundPage} />
                    <Route path={'/terms'} component={TermsConditionsPage}/>
                    <Route path={'/privacy'} component={PrivacyDescriptionPage} />
                    <Route path={'/projectdetails/:projectID/:projectName'} component={ ProjectDetailsPage }/>
                    <Route path={'/coursedetails'} component={ CourseDetailsPage } />
                </Switch>
            </Fragment>
        )
    }
}