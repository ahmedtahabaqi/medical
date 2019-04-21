import React, { Component } from 'react';
import Context from '../Context';
import Slider from 'react-slick';
import StarRatings from 'react-star-ratings';
import { Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';

class ContentHome extends Component {
    constructor() {
        super()
        this.state = {
            course: [],
            packages:[],
            rating: 3.5
        }

    }

    componentDidMount() {
        axios.get(host + `api/course`, { headers: {} })
            .then(response => {
                this.setState({ course: response.data })
            })
            .catch((error) => { console.log('error ' + error) })

        axios.get(host + `api/course/Package`, { headers: {} })
            .then(response => {
                this.setState({ packages: response.data })
            })
            .catch((error) => { console.log('error ' + error) })

    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 525,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        }
        return (<Context.Consumer>
            {ctx => {
                return (
                    <div>
                        <div id='titlecontiner'>
                            <span id='line'></span>
                            <span id='titleCourses'> New Courses </span>
                            <span id='line'></span>
                        </div>
                        <div id='continerSlider1'>
                            <Slider {...settings}>
                                {this.state.course.map(cors =>
                                    <div key={cors._id} id='cardContiner'>
                                        <Link to={'/courses/' + cors._id}>
                                            <div id='card'>
                                                <div>
                                                    <img id='imgCard' src={host + cors.img} alt="img" />
                                                </div>
                                                <div id='cardcontent'>
                                                    <h2>{cors.title}</h2>
                                                    <p>{'auther: ' + cors.userName}</p>
                                                    <div id='cardcontentBtn'>
                                                        <Button marginRight={10} marginLeft={10} intent="danger">{cors.price +' $'}</Button>
                                                        <StarRatings rating={cors.ratting} starRatedColor="gold"
                                                            starDimension='15px' id='rating'
                                                            starSpacing='4px'
                                                        />
                                                    </div>

                                                </div>

                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </Slider>
                        </div>
                        <div id='titlecontiner'>
                            <span id='line'></span>
                            <span id='titleCourses'> New Packages </span>
                            <span id='line'></span>
                        </div>
                        <div id='continerSlider2'>
                            <Slider {...settings}>
                            {this.state.packages.map(packages =>
                                <div key={packages._id} id='cardContiner'>
                                   <Link to={'/coursepackage/'+packages._id} >
                                           
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
                                            
                                        </Link>
                                </div>
                            )}

                            </Slider>
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: 'lightcoral', top: '38%', borderRadius: '50%', marginRight: 8 }}
            onClick={onClick}
            id="arownext"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            id="arownext"
            style={{ ...style, backgroundColor: 'lightcoral', top: '38%', borderRadius: '50%', marginLeft: 45, zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export default ContentHome;
