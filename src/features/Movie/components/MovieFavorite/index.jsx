import React from 'react';
import { Link } from 'react-router-dom';
import './MovieFavorite.scss';
import MovieFavoriteItem from './MovieFavoriteItem';

const MovieFavorite = (props) => {
    const { movies } = props;
    const countFavorites = Object.keys(movies).length;

    return (
        <div className="favorites">
            <div className="container">
                <h3 className="favorites__title">Danh sách phim yêu thích</h3>
                {countFavorites ? (<div className="favorites__list">
                    {movies.map((movie, key) => (
                        <MovieFavoriteItem movie={movie} key={key} />
                    ))}
                </div>) : (<div className="favorites__message">
                    Danh sách yêu thích trống. <Link to="/">Đến trang chủ.</Link>
                </div>)}


            </div>
        </div>
    );
}

export default MovieFavorite;