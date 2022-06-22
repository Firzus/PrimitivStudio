import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Row } from 'react-bootstrap';
import MusicButton from '../subComponents/MusicButton';

class Header extends Component {

    render() {
        return (
            <>
                <Container fluid className='fixed-top'>
                    <Navbar expand="lg" className='p-4' fluid>
                        <Container>
                            <Navbar.Brand className='logoTopMedia spacingMedia' as={NavLink} to="/">
                                <img
                                    src="http://localhost:1337/uploads/Logo_instin_white_3a71663b2a.png?updated_at=2022-06-17T16:46:18.789Z"
                                    width="120"
                                    height="28"
                                    className="d-inline-block align-top"
                                    alt="Instin logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
                            <Navbar.Collapse id="basic-navbar-nav" className='navbarTopMedia'>
                                <Nav className='w-50 d-flex justify-content-around'>
                                    <NavLink className='fs-5 spacingMedia rounded-pill navbarTop text-center' to="/">Home</NavLink>
                                    <NavLink className='fs-5 spacingMedia rounded-pill navbarTop text-center' to="/news">News</NavLink>
                                    <NavLink className='fs-5 spacingMedia rounded-pill navbarTop text-center' to="/history">History</NavLink>
                                    <NavLink className='fs-5 spacingMedia rounded-pill navbarTop text-center' to="/characters">Characters</NavLink>
                                    <MusicButton />
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