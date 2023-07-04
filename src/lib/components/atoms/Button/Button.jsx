import React from "react";

import classes from './Button.module.css';
import {useSelector} from "react-redux";
import {useState} from "react";
import {IconFactory} from "../IconFactory/IconFactory";

export const ButtonType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    DESTRUCTIVE: 'destructive'
}

export const Button = ({
                      className,
                      title,
                      color,
                      onClick,
                      disabled,
                      type = ButtonType.PRIMARY,
                      isLoading = false,
                      icon
                  }) => {

    const mainColor = useSelector(state => state.ui.schema.mainColor);
    let shadeColor = useSelector(state => state.ui.schema.selectedColor);

    let inColor = color;
    if (!inColor) {
        inColor = mainColor;
    }
    let opacity = 1.0;
    if (isLoading) {
        opacity = 0.7;
        // disabled = true
    }

    const initialIconColor = type === ButtonType.SECONDARY ? '#565656' : 'white';
    const [iconColor, setIconColor] = useState(initialIconColor);

    let fullClassName = classes.container + (className ? ' ' + className : '');
    let textColor = 'white';
    if (type === ButtonType.SECONDARY) {
        fullClassName += ' ' + classes.secondary;
        textColor = '#565656';
    }
    if (type === ButtonType.DESTRUCTIVE) {
        fullClassName += ' ' + classes.destructive;
        textColor = '#E0091F';
    }

    const getLoadingImage = () => {
        if (!isLoading) {
            return;
        }
        return <img
            src={'/img/loading.svg'}
            className={classes.loadingImage}
        />;
    }

    const getIcon = () => {
        if (icon) {
            return IconFactory.getIcon(icon, iconColor, classes.icon);
        }
    }

    const handleOnMouseEnter = () => {
        setIconColor(type === ButtonType.SECONDARY ? 'white' : 'white');
    }

    const handleOnMouseLeave = () => {
        setIconColor(initialIconColor);
    }

    return (
        <button
            className={fullClassName}
            style={{
                '--color': inColor,
                '--shadeColor': shadeColor,
                '--opacity': opacity
            }}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <div className={classes.contentContainer}>
                {getLoadingImage()}
                {getIcon()}
                <div className={classes.titleLabel}>
                    {title}
                </div>
            </div>
        </button>
    )
}

Button.defaultProps = {
    disabled: false
}
