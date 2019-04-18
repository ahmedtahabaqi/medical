import React, { Component } from 'react';
import Context from '../Context';
import NavbarAllPage from '../common/navbarAllPage'
// import {Link} from 'react-router-dom';

class Instructer extends Component {
    render() {
        return (<Context.Consumer>
            {ctx => {
            
                return (
                    <div>
                      <NavbarAllPage/>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}
export default Instructer;

