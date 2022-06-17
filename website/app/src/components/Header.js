import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Button, Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Container fluid className='colorPurple'>
                <Navbar expand="lg" className='p-4' fluid>
                    <Container>
                        <Navbar.Brand as={NavLink} to="/">
                            <img
                                src="http://localhost:1337/uploads/Logo_instin_white_3a71663b2a.png?updated_at=2022-06-17T16:46:18.789Z"
                                width="120"
                                height="28"
                                className="d-inline-block align-top"
                                alt="Instin logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-end'>
                            <Nav>
                                <Button as={NavLink} variant='light' className='btn fs-5 rounded-pill' to="/">Home</Button>   
                                <Button as={NavLink} variant='light' className='btn fs-5 rounded-pill' to="/news">News</Button>
                                <Button as={NavLink} variant='light' className='btn fs-5 rounded-pill' to="/characters">Characters</Button>
                                <Button as={NavLink} variant='light' className='btn fs-5 rounded-pill' to="/history">History</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Container>
            </>
        );
    };
}

export default Header;