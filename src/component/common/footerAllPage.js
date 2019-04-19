import React, { Component } from 'react';
import Context from '../Context';
import { Tab } from 'evergreen-ui';
import {Link} from 'react-router-dom';

class FooterAllPage extends Component {
    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
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
                )
            }}
        </Context.Consumer>
        );
    }
}

export default FooterAllPage;
