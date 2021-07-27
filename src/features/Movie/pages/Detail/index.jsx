import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import movieApi from '../../../../api/movieApi';
import Loading from '../../../../components/Loading';
import MovieDetail from '../../components/MovieDetail';


const Detail = (props) => {

    const { slug } = props.match.params;
    const user = useSelector(state => state.user);
    const { favorites } = user;
    const history = useHistory();
    const [movie, setMovie] = useState({});
    const [isFav, setIsFav] = useState(false);
    const getMovie = async (slug) => {
        try {
            const response = await movieApi.getBySlug(slug);
            const data = { ...response };
            if (!Object.keys(data).length) {
                history.push('/404');
            }
            setMovie(data);
        } catch (error) {
            console.log('Error');
            history.push('/404');
        }
    }
    const checkFavorites = (movie) => {
        if (favorites.length) {
            const isExist = favorites.some((item) => item === movie._id);
            if (isExist) {
                setIsFav(true);
            } else {
                setIsFav(false);
            }
            return 0
        } else {
            setIsFav(false)
        }
    };

    useEffect(() => {
        checkFavorites(movie);
    });

    useEffect(() => {
        getMovie(slug);
    }, [slug]);


    return (
        <div className="content" >
            {Object.keys(movie).length ? (<MovieDetail movie={movie} isFav={isFav} />) : (<Loading />)}
        </div >
    );
}

export default Detail;