import React from 'react';
import Context from '../Context';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';
class CorsesByCategory extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 3.5,
            courses: []
        }

    }
    componentDidMount() {

        axios.get(host + `api/course/Category/` + this.props.match.params.id, { headers: {} })
            .then(response => {
                this.setState({ courses: response.data })
            })
            .catch((error) => { console.log('error ' + error) })
    }
    render() {
        return (<Context.Consumer>
            {ctx => {
                return (
                    <div >
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <Row style={{ margin: 0, padding: 0 }}>
                                {this.state.courses.map(cors =>
                                    <Col key={cors._id} id="col1" style={{ margin: 0, marginTop: 50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
                                        <div id='allcardContiner'>
                                            <Link to={'/courses/' + cors._id}>
                                                <div id='allcard'>
                                                    <div id='allimgCardContiner'>
                                                        <img id='allimgCard' src={host + cors.img} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div id='allcardcontent'>
                                                            <h2>{cors.title}</h2>
                                                            <p>{'auther: ' + cors.userName} </p>
                                                            <div id='btnRatingContiner'>
                                                                <Button marginRight={10} marginLeft={10} intent="danger">{cors.price}</Button>
                                                                <StarRatings rating={cors.ratting} starRatedColor="gold"
                                                                    starDimension='15px' id='rating'
                                                                    starSpacing='4px' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                        <FooterAllPage />

                    </div>
                )
            }}
        </Context.Consumer>

        );
    }
}

export default CorsesByCategory;
