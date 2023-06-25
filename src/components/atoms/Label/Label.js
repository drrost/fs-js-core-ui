import React from 'react';
import classes from './Label.module.css';

export const HEADING = 'heading';
export const L = 'L';
export const M = 'M';
export const S = 'S';

export const REGULAR = 'regular';

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
    type = REGULAR, subtype = '16',
    bold = false, underlined = false, truncate = false,
    className, fontType
}) => {

    const getLineHeight = () => {
        if (subtype === L) {
            return '40px';
        }
        if (subtype === '18' || subtype === '20') {
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
            case REGULAR:
                return 400;
            case HEADING:
                return 700;
        }
    }

    const getFontSize = () => {
        switch (subtype) {
            case L:
                return '36px';
            case M:
                return '28px';
            case S:
                return '20px';
            case '20':
                return '1.25rem'
            case '18':
                return '1.125rem'
            case '16':
                return '1rem'
            case '12':
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
