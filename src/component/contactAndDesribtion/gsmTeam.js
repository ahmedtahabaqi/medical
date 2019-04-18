import React, { Component } from 'react';
import Context from '../Context';

// import {Link} from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'

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
                         <NavbarAllPage/>
                         <div>
                             <h2>GSM TEAM</h2>
                             <p>1-GSM CEO & FOUNDER (DR. HARITH ALAWADI)<br/>
                                2-GSM CO-FOUNDER (DR. ALI ALWAILY)
                            </p>
                            <h2>A-MEDICINE TEAM</h2>
                            <ol>
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
                            </ol>
                            <h2>B-DENTAL TEAM</h2>
                            <ol>
                                <li>DR. ABDULLAH AL_KHATEEB, DENTIST</li>
                                <li>DR. ALI ALJBORI, DENTIST</li>
                                <li>DR. HAYDER ALSLMAWY, DENTIST</li>
                                <li>DR. ZIYAD TARIQ ALWAILY, DENTIST</li>
                                <li>DR. SAJA HAMED ALAMI, DENTIST</li>
                                <li>DR. ABDULHADI KUMAIT, DENTIST</li>
                                <li>DR. ABDULLAH EL-HASHIMY, DENTIST</li>
                                <li>DR. AHMED ALDAWOODI, DENTIST</li>
                                <li>DR. MUSTAFA MOHAMMED FAWZI</li>
                            
                            </ol>


                         </div>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default GsmTeme;



