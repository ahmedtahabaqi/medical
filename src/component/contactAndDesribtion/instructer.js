import React, { Component } from 'react';
import Context from '../Context';
import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';
// import {Link} from 'react-router-dom';

class Instructer extends Component {
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
export default Instructer;

