import React from 'react';
import Items from '../Items/Items';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../Button/Button';
import classes from './Builder.module.css';

const Builder = () => {
    return (
        <div>
            <div class={ classes.builder }>
                <h3>Build your own Ice Cream Sundae</h3>
                <Items />
                <TotalPrice />
                <Button />
            </div>

            { /* Modal */ }
        </div>
    );
};

export default Builder;