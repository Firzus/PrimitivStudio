import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ButtonToTop extends Component {

    render() {
        return (
            <>
                <Col fluid className='background_grey'>
                    <img
                        src="http://localhost:1337/uploads/go_To_Top_Out_39ec79c8dd.png?updated_at=2022-06-22T15:13:03.427Z"
                        width="200"
                        height="200"
                        className=""
                        alt="Scroll To Top"
                    />
                </Col>
            </>
        );
    };
}

export default ButtonToTop;
