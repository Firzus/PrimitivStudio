import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

// Import your audio file
import song from "../audio/mainTheme.mp3";

class MusicButton extends Component {

    // Create state
    state = {

        // Get audio file in a variable
        audio: new Audio(song),

        // Set initial state of song
        isPlaying: false,
    };

    // Main function to handle both play and pause operations
    playPause = () => {

        // Get state of song
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {

            // Pause the song if it is playing
            this.state.audio.pause();
        } else {

            // Play the song if it is paused
            this.state.audio.play();
        }

        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    };
    
    render() {
        return (
            <>
                <Row onClick={this.playPause} className="pointerEvent d-flex justify-content-center">
                    {this.state.isPlaying ?

                        <img
                            src="http://localhost:1337/uploads/audio_On_53aec03b2d.png?updated_at=2022-06-22T16:33:48.087Z"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Audio Button Off"
                        />

                        :

                        <img
                            src="http://localhost:1337/uploads/audio_Off_b9e3afd6c5.png?updated_at=2022-06-22T16:33:48.074Z"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Audio Button On"
                        />

                    }
                </Row>
            </>
        );
    };
}

export default MusicButton;