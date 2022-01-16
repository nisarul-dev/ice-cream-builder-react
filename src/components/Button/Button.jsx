import React from 'react';
import classes from './Button.module.css';

const Button = () => {
    return (
        <button type="button" className={ [classes.order, 'rounded'].join(' ') } >
            Add to Cart
        </button>
    );
};

export default Button;