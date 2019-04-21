import React, { Component } from 'react';
import Context from '../Context';

// import {Link} from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';
class GsmTeme extends Component {
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
                            <div id='gsmTeamContiner'>
                                <br />
                                <h2>GSM TEAM</h2>
                                <br />
                                <ul id='ulGsm'>
                                    <li>GSM CEO & FOUNDER (DR. HARITH ALAWADI)</li>
                                    <li>GSM CO-FOUNDER (DR. ALI ALWAILY)</li>
                                </ul>
                                <br />
                                <h2>MEDICINE TEAM</h2>
                                <br />
                                <ul id='ulGsm'>
                                    <li>DR. HARITH ALAWADI, MD</li>
                                    <li>DR. ALI ALWAILY, MD</li>
                                    <li>DR. DANI MAMO, MD</li>
                                    <li>DR. KARRAR MAHDI, MD</li>
                                    <li>BILAL HUSSEIN, MD STUDENT </li>
                                    <li>MUTHANNA ALAMI, MD STUDENT </li>
                                    <li>AHMED SAMEER, MD STUDENT </li>
                                    <li>ALI YOUSIF, MD STUDENT</li>
                                    <li>NANCY JOSEPH, MD STUDENT</li>
                                    <li>AHMED JOSEPH, MD STUDENT</li>
                                    <li>HUMAM ADNAN AL-OBAIDI, MD STUDENT</li>
                                    <li>OMAR ALFAROOQ AL-OBAIDI, MD STUDENT</li>
                                    <li>RUQAYA SAMEER, MD STUDENT</li>
                                    <li>Dr.Mohammed Elward Emergency Hospital Of Bucharest Orthopedics and Traumatology</li>
                                </ul>
                                <br />
                                <h2>DENTAL TEAM</h2>
                                <br />
                                <ul id='ulGsm'>
                                    <li>DR. ABDULLAH AL_KHATEEB, DENTIST</li>
                                    <li>DR. ALI ALJBORI, DENTIST</li>
                                    <li>DR. HAYDER ALSLMAWY, DENTIST</li>
                                    <li>DR. ZIYAD TARIQ ALWAILY, DENTIST</li>
                                    <li>DR. SAJA HAMED ALAMI, DENTIST</li>
                                    <li>DR. ABDULHADI KUMAIT, DENTIST</li>
                                    <li>DR. ABDULLAH EL-HASHIMY, DENTIST</li>
                                    <li>DR. AHMED ALDAWOODI, DENTIST</li>
                                    <li>DR. MUSTAFA MOHAMMED FAWZI</li>
                                </ul>
                                <br />
                                <h2>TECHNICAL TEAM</h2>
                                <br />
                                <ul id='ulGsm'>
                                    <li>DR. HARITH ALAWADI</li>
                                    <li>AHMED SAMEER</li>
                                    <li>DR. ABDULLAH AL_KHATEEB</li>
                                    <li>AHMED ALZAEDY </li>
                                </ul>
                                <br />
                                {/* <h2>IT TEAM</h2>
                                <br />
                                <h4>U ADD THE MEMBERS THAT YOU WISH TO, BUT I PREFER ADDING THE WHulE TEAM MEMBERS.</h4> */}

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

export default GsmTeme;



