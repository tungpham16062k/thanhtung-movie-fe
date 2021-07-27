import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.scss';
import MovieCard from '../MovieCard';

MovieList.propTypes = {
    movieList: PropTypes.array,
};

MovieList.defaultProps = {
    movieList: [],
}

function MovieList(props) {
    const { movieList } = props;
    return (
        <section className="movie">
            <div className="container">
                <div className="row">
                    {movieList.map((movie, key) => (
                        <div className="col l-3 m-4 c-6" key={key}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MovieList;