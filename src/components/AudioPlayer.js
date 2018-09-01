import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';


const AudioPlayer = ({props}) => {
    return(
        <ReactAudioPlayer
            src={"https://www.robus.io/admin/uploads/utterances-mp3" + props}
            autoplay
            controls
        />
    )
}

export default AudioPlayer