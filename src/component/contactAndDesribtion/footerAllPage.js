import React, { Component } from 'react';
import Context from '../Context';

// import {Link} from 'react-router-dom';

class FooterAllPage extends Component {
    render() {
        return (<Context.Consumer>
            {ctx => {
            
                return (
                    <div>
                      
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default FooterAllPage;
