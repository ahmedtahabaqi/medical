import React, { Component } from 'react';
import Context from '../Context';
// import {Link} from 'react-router-dom';
import FooterAllPage from '../common/footerAllPage';
import NavbarAllPage from '../common/navbarAllPage';

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <div id='aboutusContiner'>
                                <h2>Welcome to G.SM MEDICAL EDUCATION<br />

                                </h2>
                                <br /><br />
                                <p>The first medical website of its kind which specifically targets medical field students , practitioners and physicians of Arabic world.</p>
                                <br /><br />
                                <h2>Our story and perspective: </h2>
                                <br /><br />
                                <p>As MD graduates and according to our Humble experience in European countries, so far, we have witnessed a highly qualified educational systems and the amazing medical facilities here in addition to that:  the most important issue we have witnessed is the great effort that these countries are putting to get the most educated and skilled doctors after all.
                                   meanwhile we have experienced and felt the difficulties that foreign students face during their studying process and how they suffer through their journey in this system as we were involved personally in the process and of course also the unfortunate situations in the Arabic region as many of these countries have very deteriorated educational systems specially in this vitally important part (health care system).
                             </p>
                                <br /><br />
                                <p>and here came the surprise ; personally as a founder (Dr.Harith Alawadi) I was struggling within myself and my soul ,asking myself how can I take a stand toward it and after almost 2.5 years of  multiple failed attempts I (Dr.Harith Alawadi) and the co-founder (Dr. Ali Alwaily) have decided to start the revolution from our place as a type of application of the sense of responsibility and the commitments that we have toward our nation so later on  after a long study process ,researches ,
                                    taking advantages from the developed countries systems & watching their doctors spending the maximum effort to make the complicated medical  concepts as much as possible easier to their people which eventually results in great development in teaching techniques and surely better students and doctors.
                            </p>
                                <br /><br />
                                <p>so, we decided to risk it, although, we are aware of the tremendous challenges and difficulties that we going to face in order to serve our nation as we believe that everyone is a soldier from his place, thus; probably you have seen through the website how we put huge effort and you may have  recognized
                                    how we expanded our team with new committed, hardworking members as we are looking always to expand until we reach every medical student and medical field practitioner in the tiniest Arabic village.
                            </p>
                                <br /><br />
                                <p>and the first starting spark of our dream is the beautiful website that you enjoy now simply by mastering concepts through it. 
                            </p>
                                <br /><br />
                                <h2>OUR GOALS:</h2>
                                <br />
                                <div id='goalContiner'>
                                    <p>1.To let our members understand and realized what are the real meanings of the medical concepts.</p>
                                    <br />
                                    <p>2.To make our students able to pass every qualification exam or evaluating medical exams worldwide that’s why we follow mainly USMLE SYSTEM (United State Medical Licensing Examination) in which we provide the highest quality, most comprehensive, evidence-based, highly organized and offer a single-point resource in our videos which will make you 100./. capable to pass any medical exam around the globe.</p>
                                    <br />
                                    <p>3.To provide the most beneficial courses clinically for all freshly graduated doctors which includes (medical examinations, medical analysis, CBCR courses, empirics drugs according to departments, and medical treatments guidelines etc.)</p>
                                    <br />
                                    <p>4.To give courses according to specialty provided for the medical residents and of course these courses required highly specialized professors and specialists that we are going to fight for getting the most expert of them to be recruited in this process.</p>
                                    <br />
                                    <p>5.To create general awakening courses to spread medical awareness to all the citizens of our countries and anywhere possible.</p>
                                    <br />
                                    <p>6.To keep the Arabic medical community updated as we believe that the medical field is the most developing, growing, among all other fields
                                     and it’s a duty to spread every useful information to the people who are responsible of this field and we do that by creating scheduled conferences, lectures presented by the most qualified doctors and of course there is a big role to be taken for undergraduate students as they represent the future of this field.
                            </p>
                                </div>
                                <br /><br />
                                <h2>  Thank you for visiting our website</h2><br />
                            </div>

                        </div>
                        <FooterAllPage />
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default AboutUs;
