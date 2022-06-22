import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import ButtonToTop from '../subComponents/ButtonToTop';

class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row style={{ height: '200px'}} className="background-grey">
                        
                    </Row>
                    <Row style={{ height: '400px' }} className="bg-black">
                        <Container className='w-50'>
                            <Row className='d-flex justify-content-center' as={NavLink} to="/">
                                <Col>
                                    <img
                                        src="http://localhost:1337/uploads/Logo_instin_white_3a71663b2a.png?updated_at=2022-06-17T16:46:18.789Z"
                                        width="120"
                                        height="28"
                                        className="d-inline-block"
                                        alt="Instin logo"
                                    />
                                </Col>
                            </Row>
                            <Row>

                            </Row>
                            <Row>

                            </Row>
                            <Row>

                            </Row>
                        </Container>
                    </Row>
                </Container>
            </>
        );
    };
}

export default Footer;