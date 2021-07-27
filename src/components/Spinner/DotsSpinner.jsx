import React from 'react';
import PropTypes from 'prop-types';
import './DotsSpinner.scss'

DotsSpinner.propTypes = {
    color: PropTypes.string,
};

DotsSpinner.defaultProps = {
    color: 'fff',
};

function DotsSpinner(props) {
    const { color } = props;

    return (
        <div className="loading__dots">
            <div className="loading__dots-item loading__dots-item--bounce" style={{ backgroundColor: color }} />
            <div className="loading__dots-item loading__dots-item--bounce2" style={{ backgroundColor: color }} />
            <div className="loading__dots-item loading__dots-item--bounce3" style={{ backgroundColor: color }} />
        </div>
    );
}

export default DotsSpinner;