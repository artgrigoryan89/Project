import React, {Component} from 'react';

const QualCheckBox = ({handleChange}) => {
    return(
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Якість запису</label>
            </div>
            <div className="col-lg-9">
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Взагалі нічого не розібрати">
                    <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio1" value="1" onChange={handleChange}/> 1
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Треба дуже вслуховуватись">
                    <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio2" value="2" onChange={handleChange}/> 2
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Треба вслуховуватись">
                    <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio3" value="3" onChange={handleChange}/> 3
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Незначні шуми">
                    <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio4" value="4" onChange={handleChange}/> 4
                </label>
                <label className="radio-inline" data-toggle="tooltip" data-container="body" title="Взгалі без шумів">
                    <input type="radio" name="RecordingQuality" id="RecordingQuality_Radio5" value="5" onChange={handleChange}/> 5
                </label>
            </div>
        </div>
    )
};

export default QualCheckBox