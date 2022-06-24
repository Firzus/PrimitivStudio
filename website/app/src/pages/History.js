import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

class History extends Component {
    render() {
        return (
            <>
                <Header />

                <Container fluid style={{ height: '100vh' }} className="colorPurple">
                    <Container fluid className='' />
                </Container>

                <Container fluid style={{ height: '100vh' }} className="bg-black">

                </Container>

                <Footer />
            </>
        );
    };
}

export default History;