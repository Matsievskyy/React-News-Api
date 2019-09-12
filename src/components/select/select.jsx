import React from 'react';
import PropTypes from 'prop-types';

import classes from './select.module.css';

const Input = ({ handleChange, options, value }) => (
    <div className={classes.selectWrapper}>
        <select onChange={handleChange} value={value}>
            {options.map(({ value, label }) =>
                <option key={value} value={value}>{label}</option>
            )}
        </select>
        <span className={classes.selectText}></span>
    </div>
);

Input.propTypes = {
    handleChange: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.number
}

Input.defaultProps = {
    onChange: () => {},
    options: [],
    value: 0
}

export default Input;