import React from 'react';
import classes from './Label.module.css';

export const LabelType = {
    HEADING: 'heading',
    REGULAR: 'REGULAR'
}

export const LabelSubtype = {
    L: 'L',
    M: 'M',
    S: 'S',
    12: 12,
    16: 16,
    18: 18,
    20: 20,
}

export const FontType = {
    TITLE: 'title',
    BODY: 'body'
}

const getFullClassName = (className, underlined, truncate) => {
    let fullClassName = classes.container + (className ? ' ' + className : '');
    if (underlined) {
        fullClassName += ' ' + classes.underlined;
    }
    if (truncate) {
        fullClassName += ' ' + classes.truncate;
    }
    return fullClassName;
}

export const Label = ({
    title, color,
    type = LabelType.REGULAR, subtype = LabelSubtype["16"],
    bold = false, underlined = false, truncate = false,
    className, fontType
}) => {

    const getLineHeight = () => {
        if (subtype === LabelSubtype.L) {
            return '40px';
        }
        if (subtype === LabelSubtype["18"] || subtype === LabelSubtype["20"]) {
            return '24px';
        }
        if (subtype === '12') {
            return '1rem';
        }
        return title || title === '' ? '20px' : '0px';
    }

    let fullClassName = getFullClassName(className, underlined, truncate);

    const getColor = () => {
        if (color) {
            return color;
        }
        switch (fontType) {
            case FontType.TITLE:
                return '#2D2D2D';
            case FontType.BODY:
                return '#565656';
        }
    }

    const getFontWeight = () => {
        if (bold) {
            return bold ? 700 : 400;
        }
        switch (type) {
            case LabelType.REGULAR:
                return 400;
            case LabelType.HEADING:
                return 700;
        }
    }

    const getFontSize = () => {
        switch (subtype) {
            case LabelSubtype.L:
                return '36px';
            case LabelSubtype.M:
                return '28px';
            case LabelSubtype.S:
                return '20px';
            case LabelSubtype["20"]:
                return '1.25rem'
            case LabelSubtype["18"]:
                return '1.125rem'
            case LabelSubtype["16"]:
                return '1rem'
            case LabelSubtype["12"]:
                return '0.75rem'
        }
        return '16px';
    }

    return (
        <div
            className={fullClassName}
            style={{
                lineHeight: getLineHeight(),
                color: getColor(),
                fontWeight: getFontWeight(),
                fontSize: getFontSize()
            }}
        >
            {title}
        </div>
    );
}
