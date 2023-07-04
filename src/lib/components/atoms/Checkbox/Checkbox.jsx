import React from 'react';
import classes from './Checkbox.module.css';
import Box from "./Box/Box.jsx";
import {Label} from "../Label/Label.jsx";
import {getFullClassName} from "../../../utils/utils.js";

export const Checkbox = ({title, selected, focusable = true, className, onChange}) => {

    const fullClassName = getFullClassName(classes.container, className) + ' unselectable';

    return (
        <div className={fullClassName}>
            <Box selected={selected} focusable={focusable} onChange={onChange}/>
            <Label title={title}/>
        </div>
    )
}
