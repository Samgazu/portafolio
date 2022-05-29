import React from 'react';
import './Button.scss';


const Button = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <button className={["baseButton", props.color == "white_dark" ? "white_dark_color" : '', props.color == "blue_dark" ? "blue_dark_color" : '', props.color == "blue_light" ? "blue_light_color" : '', props.color == "blue_light_reverse" ? "blue_light_color_reverse" : '', props.color == "blue_medium" ? "blue_medium_color" : ''].join(' ')} {...props}>{props.title}</button>
    );
}

export default Button;
