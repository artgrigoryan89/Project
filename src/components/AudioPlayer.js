import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {
    return(
        <ReactAudioPlayer
            src={props}
            autoplay
            controls
        />
    )
}

export default AudioPlayer