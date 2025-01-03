import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/Contact Section/ContactSection";
import Footer from "../components/Footer/Footer";

export default class ContactPage extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return(
            <Fragment>
                <TopNavigation title={'Contact Page'}/>
                <PageTop pagetitle={'Contact Page'}/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        )
    }
}