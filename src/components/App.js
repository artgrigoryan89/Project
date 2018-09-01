import React, {Component} from 'react';
import FormHeader from './FormHeader';
import AudioPlayer from './AudioPlayer';
import QualityChechkBox from './QualCheckBox';
import PronounceCheckBox from './PronounceCheckBox';
import MistakeCheckBox from './TypicalMistakeCheckBox';
import CommentField from './CommentField';
import Bookmark from './Bookmark';
import {Button} from 'reactstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{  TaskId: 1,
                UttId: 11,
                Path: "/run10/batch2/5707-jw3r",
                Cue: "this",
                SpeakerIdHash: "hash1",
                SpeakerGender: "Male",
                SpeakerAge: "30",
                LabelerLastComments: [
                    "comment1",
                    "comment2"
                ]},
            RecordingQuality:'',
            PronunciationQuality:'',
            Mistakes:'',
            Comment:'',
            IsBookmarked:'',
        };
        this.qualityHandleChange = this.qualityHandleChange.bind(this);
        this.pronounceHandleChange = this.pronounceHandleChange.bind(this);
        this.mistakeHandleChange = this.mistakeHandleChange.bind(this);
        this.commentHandleChange = this.commentHandleChange.bind(this);
        this.bookmarkHandleChange = this.bookmarkHandleChange.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    componentWillMount(){
       this.state.data = this.props.getData();
    }

    qualityHandleChange(event){
        this.setState({
            RecordingQuality: event.target.value
        })
    }

    pronounceHandleChange(event){
        this.setState({
            PronunciationQuality: event.target.value
        })
    }

    mistakeHandleChange(event){
        this.setState({
            Mistakes:event.target.value
        })
    }

    commentHandleChange(event){
        let data = event.target.value;
        this.setState({
            Comment: data
        })
    }

    bookmarkHandleChange(event){
        let data = event.target.value;
        this.setState({
            IsBookmarked: data
        })
    }

    buttonHandler(){
        event.preventDefault();
        const data = {
            RecordingQuality: this.state.RecordingQuality,
            PronunciationQuality: this.state.PronunciationQuality,
            Mistakes: this.state.Mistakes,
            Comment: this.state.Comment,
            IsBookmarked: this.state.IsBookmarked,
        };
        this.props.sendData(data);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.buttonHandler}>
                    <FormHeader props={this.state.data}/>
                    <AudioPlayer props={this.state.data.Path}/>
                    <QualityChechkBox handleChange={this.qualityHandleChange}/>
                    <PronounceCheckBox handleChange={this.pronounceHandleChange} props={this.state.data.Cue}/>
                    <MistakeCheckBox handleChange={this.mistakeHandleChange}/>
                    <CommentField handleChange={this.commentHandleChange} props={this.state.data.LabelerLastComments}/>
                    <Bookmark handleChange={this.bookmarkHandleChange}/>
                    <Button type="submit">Відправити</Button>
                </form>
            </div>
        )
    }
}