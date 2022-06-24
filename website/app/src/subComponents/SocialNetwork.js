import React, { Component } from 'react';
import { FaYoutube, FaDiscord, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';

class SocialNetwork extends Component {

    render() {
        return (
            <>
                <Col md={{ span: 1, offset: 3 }} className='d-flex align-items-center justify-content-center'>
                    <Row className='d-flex flex-column'>
                        <a as={Row} target="_blank" href='https://www.google.com/'><FaDiscord className='p-2' size='3em' color='grey' /></a>
                        <a as={Row} target="_blank" href='https://www.google.com/'><FaYoutube className='p-2' size='3em' color='grey' /></a>
                        <a as={Row} target="_blank" href='https://www.google.com/'><FaTwitter className='p-2' size='3em' color='grey' /></a>
                        <a as={Row} target="_blank" href='https://www.google.com/'><FaFacebookF className='p-2' size='3em' color='grey' /></a>
                        <a as={Row} target="_blank" href='https://www.google.com/'><FaInstagram className='p-2' size='3em' color='grey' /></a>
                    </Row>
                </Col>
            </>
        );
    };
}

export default SocialNetwork;