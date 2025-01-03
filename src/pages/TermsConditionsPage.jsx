import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsConditions from "../components/TermsConditions/TermsConditions";
import Footer from "../components/Footer/Footer";

export default class TermsConditionsPage extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return(
            <Fragment>
                <TopNavigation title={'Terms and Conditions'}/>
                <PageTop pagetitle={'Terms & Conditions'}/>
                <TermsConditions/>
                <Footer/>
            </Fragment>
        )
    }
}