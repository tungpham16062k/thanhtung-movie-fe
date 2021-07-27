import React from 'react';
import './Loading.scss';

const Loading = (props) => {
    return (
        <div className="loading">
            <div className="loading__content">
                <div className="loading__spinner" />
            </div>
        </div>
    );
}

export default Loading;