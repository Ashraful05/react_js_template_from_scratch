import React, {Component, Fragment} from "react";
import {
    createBrowserRouter, Route,
    RouterProvider, Routes,
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
                <Routes>
                    <Route exact path={'/'} element={<HomePage/>} />
                    <Route path={'/service'} element={<AllServicePage/>} />
                    <Route path={'/course'} element={<AllCoursePage/>} />
                    <Route path={'/portfolio'} element={<PortfolioPage/>} />
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/contact'} element={<ContactPage/>} />
                    <Route path={'/refund'} element={<RefundPage/>} />
                    <Route path={'/terms'} element={<TermsConditionsPage/>}/>
                    <Route path={'/privacy'} element={<PrivacyDescriptionPage />} />
                    <Route path={'/projectdetails'} element={ <ProjectDetailsPage/> }/>
                    <Route path={'/coursedetails'} element={<CourseDetailsPage/> } />
                </Routes>
            </Fragment>
        )
    }
}