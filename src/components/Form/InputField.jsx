import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';
import { moveLable } from '../../assets/js/moveLable.js';

InputField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
};

InputField.defaultProps = {
    name: '',
    type: 'text',
}

function InputField(props) {
    const { name, type } = props;
    return (
        <div className="form__group" id={`${name}Input`}>
            <input type={type} className="form__control" id={name} onChange={(e) => moveLable(e)} />
            <label className="form__label" htmlFor={name}>{name}</label>
        </div>
    );
}

export default InputField;