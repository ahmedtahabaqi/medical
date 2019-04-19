import React, { Component } from 'react';
import Context from '../Context';

// import {Link} from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';


class ContactUs extends Component {
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
                        </div>
                        <FooterAllPage />
                         
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default ContactUs;



