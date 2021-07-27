import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.scss';

MovieCard.propTypes = {
    movie: PropTypes.object,
};

MovieCard.defaultProps = {
    movie: {}
}

function MovieCard(props) {
    const { movie } = props;
    return (
        <div className="movie__item">
            <Link to={`/movie/${movie.slug}`}>
                <img src={movie.poster} alt={movie.viName} title={movie.viName} />
            </Link>
            <h5 className="movie__title">
                <Link to={`/movie/${movie.slug}`}>{movie.viName}</Link>
            </h5>
            <p className="movie__title-sec"><Link to={`/movie/${movie.slug}`}>{movie.name}</Link></p>
        </div>
    );
}

export default MovieCard;