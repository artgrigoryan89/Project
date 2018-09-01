import React, {Component} from 'react';

const ListItemInline = ({props}) => {
    return(
        <div className="checkbox my-checkbox-inline">
            <label>
                <input type="checkbox" name="Mistakes" value={props.value} onChange={props.handleChange} />
                {props.text}
            </label>
        </div>
    )
};

export default ListItemInline;