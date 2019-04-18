import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Context from '../Context';

import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage'



class ShowPackages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [],

        };
    }


    componentDidMount() {


        axios.get(host + `api/course/Package`, { headers: {} })
            .then(response => {
                this.setState({ packages: response.data })
            })
            .catch((error) => { console.log('error ' + error) })


    }



    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div >
                             <NavbarAllPage/>


                            <Row style={{ margin: 0, padding: 0 }}>
                                {this.state.packages.map(packages =>
                                    <Col key={packages._id} id="col1" style={{ margin: 0, marginTop: 50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
                                        <Link to={'/coursepackage/'+packages._id} >
                                            <div id='allcardContiner'>
                                                <div id='allcardpackage'>
                                                    <div id='imagecardpackage'>
                                                        <img id='imagecardpackage' src={host + packages.img} alt="img" />
                                                    </div>
                                                    <div id='allcardcontentpackage'>
                                                        <div>
                                                            <h2>{packages.Title}</h2>
                                                            <p>{packages.body} </p>
                                                        </div>
                                                        <div id='pricepackage' >{packages.Price + ' $'}</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </Col>)}
                            </Row>

                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default ShowPackages;