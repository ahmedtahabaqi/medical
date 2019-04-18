import React from 'react';
import {   Image } from 'react-bootstrap';
import { Button, SearchInput} from 'evergreen-ui';
import Context from '../Context';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage'
class HeaderHome extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 3.5,
            category: [],
        }

    }
    componentDidMount() {

        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { this.setState({ category: response.data }) })
            .catch((error) => { console.log('error ' + error) })
    }
    render() {
        return (
            <Context.Consumer>
            {ctx => {
                return (
            <div >
                <NavbarAllPage/>
                <div>

                    <div id='searchHome'>
                        <p id='pImg'>now it's possible: excel your knowledge<br /> and teach others  join now</p>
                        <Link to="#"> < Button id='becomeInstructureButtom'
                            appearance="primary" intent="none">Become an instructor</Button>
                        </Link>
                        <SearchInput id='searchHome1' placeholder="Search for courses..." />

                    </div>
                    <img id='homeImages' src={require('../../assets/homeimage.png')} alt="img" />
                </div>
                <div id='redbar'>
                    <div id='contentRedbar'>
                        <Image roundedCircle width='50px' height='50px' src={require('../../assets/Dr.Harith Alawadi.jpeg')} alt="Image" />
                        <div >
                            <h3>Dr.Harith Alawadi</h3>
                            <StarRatings rating={this.state.rating} starRatedColor="gold"
                                starDimension='15px' id='rating'
                                starSpacing='2px' />
                        </div>
                    </div>
                    <div id='contentRedbar'>
                        <Image roundedCircle width='50px' height='50px' src={require('../../assets/Dr Karrar mahdi.jpg')} alt="Image" />
                        <div >
                            <h3>Dr Karrar Mahdi</h3>
                            <StarRatings rating={this.state.rating} starRatedColor="gold"
                                starDimension='15px' id='rating'
                                starSpacing='2px' />
                        </div>
                    </div>
                    <div id='contentRedbar'>
                        <Image roundedCircle width='50px' height='50px' src={require('../../assets/dr Dani mamo.jpg')} alt="Image" />
                        <div>
                            <h3>Dr Dani Mamo</h3>
                            <StarRatings rating={this.state.rating} starRatedColor="gold"
                                starDimension='15px' id='rating'
                                starSpacing='2px' />
                        </div>
                    </div>
                    <div id='contentRedbar'>
                        <Image roundedCircle width='50px' height='50px' src={require('../../assets/dr ali alwaily.jpg')} alt="Image" />
                        <div>
                            <h3>Dr Ali Alwaily</h3>
                            <StarRatings rating={this.state.rating} starRatedColor="gold"
                                starDimension='15px' id='rating'
                                starSpacing='2px' />
                        </div>
                    </div>
                </div>
            </div>
                 )
                }}
            </Context.Consumer>
        );
    }
}

export default HeaderHome;
