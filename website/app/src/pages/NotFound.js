import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const NotFound = () =>  (

    <Container fluid className='bg-dark h-100' >
        <img
            src=""
            alt="background image"
            className=""
        />
        <Row>
            <Col md={2}>
                <Row>
                    <img
                        src="http://localhost:1337/uploads/back_To_The_Homepage_0784251486.png?updated_at=2022-06-16T17:52:15.895Z"
                        alt=""
                        className=""
                    />
                </Row>
                <Row>
                    <img
                        src="http://localhost:1337/uploads/Delorean_8ab95c1ae8.png?updated_at=2022-06-16T17:52:15.940Z"
                        alt=""
                        className=""
                    />
                </Row>
            </Col>
            <Col md={1}>

            </Col>
        </Row>
    </Container>

);

export default NotFound;