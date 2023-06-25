import React from 'react';
import classes from './CheckboxV2.module.css';
import Label from "../../Label/Label";
import Box from "./Box/Box";
import {getFullClassName} from "../../../../utils/Utils";

export const Checkbox = ({title, selected, focusable = true, className, onChange}) => {

    const fullClassName = getFullClassName(classes.container, className) + ' unselectable';

    return (
        <div className={fullClassName}>
            <Box selected={selected} focusable={focusable} onChange={onChange}/>
            <Label title={title}/>
        </div>
    )
}
