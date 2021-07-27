import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import movieApi from '../../../../api/movieApi';
import Loading from '../../../../components/Loading';
import MovieFavorite from '../../components/MovieFavorite';


const Favorite = (props) => {
    const { favorites } = useSelector(state => state.user);
    const countFavorites = Object.keys(favorites).length;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    const history = useHistory();


    useEffect(() => {
        if (token && token !== 'null') {
            const getFavorites = async () => {
                try {
                    setLoading(true);
                    const response = await movieApi.getFavorites(token);
                    const listMovie = response.movies;
                    setMovies([...listMovie]);
                    setLoading(false)
                } catch (error) {
                    console.log(error.error.response.message);
                }
            }
            getFavorites()
        }
    }, [countFavorites, token]);

    useEffect(() => {
        if (!token || token === 'null') {
            history.push('/login');
        }
    }, [token, history]);

    return (
        <div className="content" >
            {token && !loading ? (
                <MovieFavorite movies={movies} />
            ) : (<Loading />)}
        </div >
    );
}

export default Favorite;