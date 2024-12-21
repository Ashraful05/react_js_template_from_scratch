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

export default class AppRouter extends Component{
    render() {
        return(
            <Fragment>
                <Routes>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/service'} component={AllServicePage} />
                    <Route path={'/course'} Component={AllCoursePage} />
                    <Route path={'/portfolio'} Component={PortfolioPage} />
                    <Route path={'/about'} Component={AboutPage}/>
                    <Route path={'/contact'} Component={ContactPage} />
                </Routes>
            </Fragment>
        )
    }
}