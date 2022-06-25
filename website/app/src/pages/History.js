import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NavLink } from "react-router-dom";

class History extends Component {
    render() {
        return (
            <>
                <div className="colorPurple">
                    <section>
                        <img className='stars' alt='background' src='http://localhost:1337/uploads/stars_cab6b4cd6b.png?updated_at=2022-06-25T12:02:17.838Z' />
                        <img className='moon' alt='background' src='http://localhost:1337/uploads/moon_677651997f.png?updated_at=2022-06-25T12:02:17.696Z' />
                        <img className='mountains-behind' alt='background' src='http://localhost:1337/uploads/mountains_behind_8535b617de.png?updated_at=2022-06-25T12:02:17.962Z' />

                        <Container className='position-absolute top-50 start-50 translate-middle'>
                            <Row className='d-block'>
                                <Col className='textHome text-center p-3'>
                                    Moon Light
                                </Col>
                                <Col className='d-flex justify-content-center p-3'>
                                    <NavLink
                                        className='buttonPlay text-decoration-none bg-white fs-3'
                                        to="/"
                                    >
                                        Pre-register
                                    </NavLink>
                                </Col>
                            </Row>
                        </Container>

                        <img className='mountains-front' alt='background' src='http://localhost:1337/uploads/mountains_front_a24bcbc5d7.png?updated_at=2022-06-25T12:02:18.422Z' />
                    </section>
                    <Header />
                </div>

                <Container fluid style={{ height: '100vh' }} className="bg-black">

                </Container>

                <Footer />
            </>
        );
    };
}

export default History;