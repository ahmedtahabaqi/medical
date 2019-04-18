import React, { Component } from 'react';
import Context from '../Context';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, Popover, Menu, Position } from 'evergreen-ui';
import AvataeAndEdit from '../common/Avatar';
import axios from 'axios';
import host from '../Host';
import { Link } from 'react-router-dom';

class NavbarAllPage extends Component {
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
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <Navbar id='collaps' collapseOnSelect expand="lg" bg="light" variant="light" >
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Brand href="/">
                                <img height="27" src={require('../../assets/logo.png')} alt="img" />
                            </Navbar.Brand>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Popover
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Link to='/allcourses'><Menu.Item>All Category</Menu.Item></Link>
                                                    {this.state.category.map(cate =>
                                                        <Link key={cate._id} to={'/CoursesByCategory/' + cate._id} >
                                                            <Menu.Item  >{cate.name}</Menu.Item>
                                                        </Link>
                                                    )}
                                                </Menu.Group>

                                            </Menu>
                                        }
                                    >
                                        <Button marginRight={10} iconAfter="caret-down">Category</Button>
                                    </Popover>
                                    <Link to="/ShowPackages">
                                        < Button appearance="primary" intent="none">Packages</Button>
                                    </Link>
                                </Nav>
                                <Nav>
                                    <div style={ctx.value.auth !== "login" ? { display: "none" } : {}}>
                                        <AvataeAndEdit />
                                    </div>
                                    <div style={ctx.value.auth !== "login" ? {} : { display: "none" }}>
                                        <Popover
                                            position={Position.BOTTOM_LEFT}
                                            content={
                                                <Menu>
                                                    <Menu.Group>
                                                        <Menu.Item ><Link
                                                            to="/loginuser"
                                                        >Login user</Link></Menu.Item>
                                                        <Menu.Item ><Link to="/logintecher">Login teacher</Link></Menu.Item>
                                                    </Menu.Group>
                                                </Menu>
                                            }
                                        >
                                            <Button marginRight={10} iconAfter="caret-down">Login</Button>
                                        </Popover>
                                    </div>
                                    <div style={ctx.value.auth !== 'login' ? {} : { display: "none" }}>
                                        <Popover
                                            position={Position.BOTTOM_LEFT}
                                            content={
                                                <Menu>
                                                    <Menu.Group>
                                                        <Menu.Item ><Link to="/registeruser">Register user</Link></Menu.Item>
                                                        <Menu.Item ><Link to="/registertecher">Register teacher</Link></Menu.Item>
                                                    </Menu.Group>
                                                </Menu>
                                            }
                                        >
                                            <Button marginRight={10} iconAfter="caret-down">Register</Button>
                                        </Popover>
                                    </div>
                                </Nav>
                            </Navbar.Collapse >
                        </Navbar>
                        <div>
                            
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default NavbarAllPage;





