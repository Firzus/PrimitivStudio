import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import BackToTopButton from '../subComponents/BackToTopButton';
import SocialNetwork from '../subComponents/SocialNetwork';

class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row className="bg-black p-2">
                        <Col md={{ span: 2, offset: 1 }} className='d-flex justify-content-center'>
                            <BackToTopButton />
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <Row className='p-3'>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    <img
                                        src="http://localhost:1337/uploads/Logo_instin_white_3a71663b2a.png?updated_at=2022-06-17T16:46:18.789Z"
                                        width="120"
                                        height="28"
                                        className='fluid-img'
                                        alt="Instin logo"
                                    />
                                </Col>
                            </Row>
                            <Row className='p-3'>
                                <Col className='fs-10 text-center text-secondary decoration-underline' as={NavLink} to="/privacy-policy">Privacy Policy</Col>
                                <Col className='fs-10 text-center text-secondary decoration-underline' as={NavLink} to="/terms-of-service">Terms of Service</Col>
                                <Col className='fs-10 text-center text-secondary decoration-underline' as={NavLink} to="/contact-us">Contact Us</Col>
                                <Col className='fs-10 text-center text-secondary decoration-underline' as={NavLink} to="/about-us">About Us</Col>
                            </Row>
                            <Row className='p-3'>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    <img
                                        src="http://localhost:1337/uploads/Studio_e04d53eacc.png?updated_at=2022-06-23T12:51:39.935Z"
                                        width="250"
                                        height="126"
                                        alt="Primitiv logo"
                                    />
                                </Col>
                            </Row>
                            <Row className='p-3'>
                                <Col className='fs-5 text-center text-secondary text-decoration-none'>Copyright © Primitiv Studio. All Rights Reserved.</Col>
                            </Row>
                        </Col>
                        <SocialNetwork />
                    </Row>
                </Container>
            </>
        );
    };
}

export default Footer;