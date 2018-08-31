import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {
    return(
        <ReactAudioPlayer
            src={props.path}
            autoplay
            controls
        />
    )
}

export default AudioPlayer