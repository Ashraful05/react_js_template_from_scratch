import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/Contact Section/ContactSection";
import Footer from "../components/Footer/Footer";

export default class ContactPage extends Component{
    render() {
        return(
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle={'Contact Page'}/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        )
    }
}