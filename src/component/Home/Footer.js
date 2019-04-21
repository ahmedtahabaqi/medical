import React from 'react';
import Component from "@reactions/component";
import { Dialog, Pane } from 'evergreen-ui';
import { Button, Tab } from 'evergreen-ui';
import AliceCarousel from 'react-alice-carousel';
import { Media, Image, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";
var Coverflow = require('react-coverflow');


class FooterHome extends Component {

    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
    };
    render() {

        return (
            <div id='footercontiner'>
                <Coverflow
                    width={'100%'}
                    height={500}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    <video controls>
                        <source src={require("../../assets/video.mp4")} type="video/mp4" />
                    </video>
                    <video controls>
                        <source src={require("../../assets/video.mp4")} type="video/mp4" />
                    </video>
                    <video controls>
                        <source src={require("../../assets/video.mp4")} type="video/mp4" />
                    </video>
                    <video controls>
                        <source src={require("../../assets/video.mp4")} type="video/mp4" />
                    </video>
                    <video controls>
                        <source src={require("../../assets/video.mp4")} type="video/mp4" />
                    </video>


                </Coverflow>

                <div id='continerCrosol'>
                    <div id='studentCrosol' > <h2>Trusted By</h2></div>
                    <div>
                        <AliceCarousel
                            duration={400}
                            autoPlay={false}
                            startIndex={0}
                            fadeOutAnimation={true}
                            mouseDragEnabled={true}
                            playButtonEnabled={false}
                            autoPlayInterval={2000}
                            autoPlayDirection="rtl"
                            responsive={this.responsive}
                            disableAutoPlayOnAction={false}
                            onSlideChange={this.onSlideChange}
                            onSlideChanged={this.onSlideChanged}
                        >
                            <Media id='mediacroso'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="align-self-start mr-3"
                                    src={require('../../assets/Dr. Maha Mohammed Abd Ali.jpeg')}
                                    alt="Generic placeholder"
                                    roundedCircle
                                />
                                <Media.Body>
                                    <h5>Dr. Maha Mohammed Abd Ali</h5>
                                    <ul id='mediacrosol1' >
                                        <li>MS.C, H.D.D</li>
                                        <li>Director of cancer control department /medical city/ Iraq</li>
                                        <li>Director of Cancer Research Lab. in Oncology Teaching Hospital</li>
                                    </ul>

                                </Media.Body>
                            </Media>
                            <Media id='mediacroso'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="align-self-start mr-3"
                                    src={require('../../assets/4.jpeg')}
                                    alt="Generic placeholder"
                                    roundedCircle
                                />
                                <Media.Body>
                                    <h5>Ass.prof. dr.mohammed alshahwani</h5>
                                    <ul id='mediacrosol1' >
                                        <li>Consultant urologist</li>
                                        <li>MBChB , FICMS</li>
                                    </ul>
                                </Media.Body>
                            </Media>
                            <Media id='mediacroso'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="align-self-start mr-3"
                                    src={require('../../assets/5.jpeg')}
                                    alt="Generic placeholder"
                                    roundedCircle
                                />
                                <Media.Body>
                                    <h5>Dr. Ziad Alrawi</h5>
                                    <ul id='mediacrosol1' >
                                        <li>Vice President at Iraqi dental association</li>
                                        <li>Works at Baghdad smile Clinics</li>
                                    </ul>
                                </Media.Body>
                            </Media>
                            <Media id='mediacroso'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="align-self-start mr-3"
                                    src={require('../../assets/6.jpeg')}
                                    alt="Generic placeholder"
                                    roundedCircle
                                />
                                <Media.Body>
                                    <h5>Dr.sahar Alani</h5>
                                    <p>
                                        Dean of Dentistry Faculty at Al-Farahidi University
                                     </p>

                                </Media.Body>
                            </Media>
                            <Media id='mediacroso'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="align-self-start mr-3"
                                    src={require('../../assets/3.jpeg')}
                                    alt="Generic placeholder"
                                    roundedCircle
                                />
                                <Media.Body>
                                    <h5>Dr. Ensaf Mohsen Mohammad </h5>
                                    <ul id='mediacrosol1' >

                                        <li>M.B.Ch.B ,D.G.O ,C.A.B.G.O </li>
                                        <li>Working in Dubai Star Polyclinic, a Private Sector in Dubai and at the same time
                                        Obstetrician and Gynecologist Consultant in Belhoul Hospital
                                       </li>
                                    </ul>
                                    <Component initialState={{ isShown: false }}>
                                        {({ state, setState }) => (
                                            <Pane>
                                                <Dialog
                                                    isShown={state.isShown}
                                                    onCloseComplete={() => setState({ isShown: false })}
                                                    hasFooter={false}
                                                    hasHeader={false}
                                                >
                                                    <h5>Dr. Ensaf Mohsen Mohammad </h5>
                                                    <ul id='mediacrosol1' >

                                                        <li>M.B.Ch.B ,D.G.O ,C.A.B.G.O </li>
                                                        <li>Working in Dubai Star Polyclinic, a Private Sector in Dubai and at the same time
                                                        Obstetrician and Gynecologist Consultant in Belhoul Hospital
                                                         </li>
                                                        <li>•	Member of Iraqi Medical Association 1981.</li>
                                                        <li>Member of Libyan Medical Association 1997. </li>
                                                    </ul>
                                                </Dialog>
                                                <div style={{ marginTop: 20, cursor: 'pointer' }} >  <span onClick={() => setState({ isShown: true })}
                                                >Read More</span>
                                                </div>
                                            </Pane>
                                        )}
                                    </Component>

                                </Media.Body>
                            </Media>
                            <Media id='mediacroso'>
                                <Image
                                    width={100}
                                    height={100}
                                    className="align-self-start mr-3"
                                    src={require('../../assets/2.jpeg')}
                                    alt="Generic placeholder"
                                    roundedCircle
                                />
                                <Media.Body>
                                    <h5>Dr. Khalid Mohsin Mohammad</h5>
                                    <ul id='mediacrosol1' >

                                        <li>Consultant Orthopedic Surgeon Ryhov Hosptal Jönköping /Sweden.</li>
                                        <li>Lecturer for orthopedic engineering Jönköping University/Sweden.</li>

                                    </ul>
                                    <Component initialState={{ isShown: false }}>
                                        {({ state, setState }) => (
                                            <Pane>
                                                <Dialog
                                                    isShown={state.isShown}
                                                    onCloseComplete={() => setState({ isShown: false })}
                                                    hasFooter={false}
                                                    hasHeader={false}
                                                >
                                                    <h5>Dr. Khalid Mohsin Mohammad</h5>
                                                    <ul id='mediacrosol1' >

                                                        <li>Consultant Orthopedic Surgeon Ryhov Hosptal Jönköping /Sweden.</li>
                                                        <li>Lecturer for orthopedic engineering Jönköping University/Sweden.</li>
                                                        <li>Consutlant Orthopedic (Knee replacement) surgery Jönköping Ryhov Hospital /Sweden.</li>
                                                        <li>Consultant  Spine surgon, Neuro-Orthopedic Center/NOC/Jönköping/Sweden</li>
                                                        <li>Consultant Spine surgeon ,Skaraborg Hospital</li>
                                                    </ul>
                                                </Dialog>
                                                <div style={{ marginTop: 20, cursor: 'pointer' }} >  <span onClick={() => setState({ isShown: true })}
                                                >Read More</span>
                                                </div>
                                            </Pane>
                                        )}
                                    </Component>

                                </Media.Body>
                            </Media>
                        </AliceCarousel>
                    </div>
                    <div>

                        <Container id='becomAndbusines'>
                            <Row className="justify-content-center">
                                <Col id='becomeContiner'>
                                    <h2>Become An Instructor</h2>
                                    <p>Teach What You Love. G.S.M Gives You The Opportunity And The Tools To Create An Online Courses.</p>
                                    <Button appearance="primary" intent="none">Start Teaching</Button>
                                </Col>
                            </Row>
                        </Container>
                        <div id='copyriteContiner'>
                            <div id='logoAndCopy'>
                                <img height="27" src={require('../../assets/logo.png')} alt="img" />
                                <p> Copyright © 2019.</p>
                            </div>
                            <div>
                                <Link to='/aboutus'><Tab>About Us</Tab></Link>

                                <Link to='/contactus'><Tab>Contact Us</Tab></Link>

                                <Link to='/gsmteam'><Tab>G.S.M Team </Tab></Link>

                                <Link to=''><Tab>Terms Of Service</Tab></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FooterHome;
