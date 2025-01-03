import React, {Component, Fragment} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import {BigPlayButton, Player} from "video-react";


export default class CourseDetails extends Component{
    render() {
        return(
            <Fragment>
                <Container className={'mt-5'}>
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <h1 className={'courseDetailsText'}>The quick, brown fox jumps over a lazy dog.</h1>
                            <img className={'courseDetailsImage'} src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" alt=""/>
                            <p className={'courseDescription mt-2'}>
                                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                                <br/><br/> bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. <br/><br/> Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
                            </p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={'widget widget_feature'}>
<h4 className={'widget-title text-center'}>Course Features</h4><hr/>
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faUser} /><span>Enrolled :</span> 1200 students</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClock} /><span>Duration :</span> 2 hours</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /><span>Lectures :</span> 8</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faClone} /><span>Categories:</span> Technology</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faTags} /><span>Tags:</span> Android, JavaScript</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /><span>Instructor:</span> Ethan Dean</li>
                                </ul>
                                <div className="price-wrap text-center">
                                    <h5>Price:<span>$54.00</span></h5>
                                    <Button variant="warning">ENROLL COURSE</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className={'mt-5'}>
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <div className={'widget_feature'}>
                                <h1 className={'courseDetailsText'}>Skills You Need</h1><hr/>
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenas</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Fringilla nulla</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenas</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}