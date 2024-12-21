import React, {Component, Fragment} from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import ContactSection from "../components/Contact Section/ContactSection";
import Footer from "../components/Footer/Footer";

export default class AllServicePage extends Component{
    render() {
        return(
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle={'Our Services'} />
                <Services/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        )
    }
}