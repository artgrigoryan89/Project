import React, {Component} from 'react';
import FormHeader from './FormHeader';
import AudioPlayer from './AudioPlayer';
import QualityChechkBox from './QualCheckBox';
import PronounceCheckBox from './PronounceCheckBox';
import MistakeCheckBox from './TypicalMistakeCheckBox';
import ComentField from './ComentField';
import Bookmark from './Bookmark';

export default class FormField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quality:'',
            pronounce:'',
        };
        this.qualityHandleChange = this.qualityHandleChange.bind(this);
        this.pronounceHandleChange = this.pronounceHandleChange.bind(this);
    }

    componentWillMount(){
    }

    qualityHandleChange(event){
        this.setState({
            quality: event.target.value
        })
    }

    pronounceHandleChange(event){
        this.setState({
            pronounce: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <FormHeader/>
                <AudioPlayer path={this.state.Path}/>
                <QualityChechkBox handleChange={this.qualityHandleChange}/>
                <PronounceCheckBox handleChange={this.pronounceHandleChange}  />
                <MistakeCheckBox/>
                <ComentField/>
                <Bookmark/>
            </div>
        )
    }
}