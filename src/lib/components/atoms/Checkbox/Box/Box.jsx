import React from 'react';
import classes from './Box.module.css';
import {checkedIcon} from "./check-bold.jsx";

const Box = ({selected, focusable = true, onChange}) => {

    const getCheckmark = () => {
        if (selected) {
            return checkedIcon();
        }
    }

    const bgColor = selected ? '#DAE9FF' : 'white';

    return (
        <div
            className={classes.container}
            tabIndex={focusable ? 0 : -1}
            style={{'--bgColor': bgColor}}
            onClick={() => onChange(!selected)}
        >
            <div className={classes.borderedView}/>
            {getCheckmark()}
        </div>
    );
}

export default Box
