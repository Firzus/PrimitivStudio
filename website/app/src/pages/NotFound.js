import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NotFound = () =>  (

    <Container fluid style = {{height:"100vh"}} className='bg-black'>
        <Row>
            <Col md={8} className='d-flex justify-content-center'>
                <Row>
                    <Row style = {{height:"50vh"}} className='p-5 d-flex align-items-center justify-content-center'>
                        <img
                        src="http://localhost:1337/uploads/back_To_The_Homepage_0784251486.png?updated_at=2022-06-16T17:52:15.895Z"
                        className="img-fluid"
                        style = {{width:"60%"}}
                        atl="logo back to the home page"
                        />
                    </Row>
                    <Row style = {{height:"50vh"}} className='p-5 d-flex align-items-center justify-content-center'>
                        <img
                            src="http://localhost:1337/uploads/Delorean_8ab95c1ae8.png?updated_at=2022-06-16T17:52:15.940Z"
                            className="img-fluid"
                            style = {{width:"60%"}}
                            alt="illustration"
                            />
                    </Row>
                </Row>
            </Col>
            <Col xs={4} style = {{height:"100vh"}} className='d-flex align-items-center p-5'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Row className='pb-3 font-link text-uppercase text-danger fs-1 justify-content-center text-center'>
                        404
                    </Row>
                    <Row className='pt-3 pb-3 font-link text-uppercase text-white text-center fs-2 justify-content-center text-center'>
                        page not<br/>found
                    </Row>
                    <Row className='pt-3 pb-3 font-link text-uppercase text-white fs-3 justify-content-center text-center'>
                        back to home
                    </Row>

                    <Row className='pt-3'>
                        <Link
                            to="/"
                            className='d-flex justify-content-center text-decoration-none'
                        >
                            <button
                                className='btn btn-outline-danger font-link text-uppercase text-white fs-4'
                                type='button'
                            >
                                go
                            </button>
                        </Link>
                    </Row>
                </Row>
            </Col>
        </Row>
    </Container>

);

export default NotFound;