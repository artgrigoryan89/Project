import React, {Component} from 'react';

const QualCheckBox = ({handleChange, props}) => {
    return(
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Правильність вимови <span class="badge">{props.cue}</span></label>
            </div>
            <div className="col-lg-9">
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Дуже погана">
                    <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio1" value="1"/> 1
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Погана">
                    <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio2" value="2"/> 2
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Добра">
                    <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio3" value="3"/> 3
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Дуже хороша">
                    <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio4" value="4"/> 4
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Ідеальна">
                    <input type="radio" name="PronunciationQuality" id="PronunciationQuality_Radio5" value="5"/> 5
                </label>
                <div className="checkbox">
                    <label className="radio-inline">
                        <input type="radio" name="PronunciationQuality" id="PronunciationQuality_RadioNA" value="-1"/> неможливо оцінити
                    </label>
                </div>
            </div>
        </div>
    )
};

export default QualCheckBox