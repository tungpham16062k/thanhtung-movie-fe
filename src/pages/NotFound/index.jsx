import React from 'react';
import './NotFound.scss';

const NotFound = (props) => {
    return (
        <section className="content">
            <section className="not-found">
                <div className="container">
                    <p className="not-found__title">
                        404
                    </p>
                    <p className="not-found__desc">
                        Sorry, the page not found...
                    </p>
                </div>
            </section>
        </section>
    );
}

export default NotFound;