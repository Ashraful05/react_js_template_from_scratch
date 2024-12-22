import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import Footer from "../components/Footer/Footer";

export default class PrivacyDescriptionPage extends Component{
    render() {
        return (
            <Fragment>
                <TopNavigation title={'Privacy Policy Page'}/>
                <PageTop pagetitle={'Privacy Policy '}/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}