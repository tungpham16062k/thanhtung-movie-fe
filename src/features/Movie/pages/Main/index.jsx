import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import MovieList from '../../components/MovieList';
import Paging from '../../../../components/Paging';
import Loading from '../../../../components/Loading';
import movieApi from '../../../../api/movieApi';
import { useDispatch, useSelector } from 'react-redux';
import { setDataMovies } from '../../../../actions/movie';


const Main = (props) => {
    const page = props.match.params.page || 1;
    const data = useSelector(state => state.movie.data);
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: parseInt(page) || 1,
        limit: 12,
        totalRows: 1,
    });
    const [filter, setFilter] = useState({
        page: parseInt(page) || 1,
        limit: 12,
    });
    const getMoviesData = async () => {
        try {
            setLoading(true);
            const paramsString = queryString.stringify(filter);
            const response = await movieApi.getAll(paramsString);
            const { movies, pagination } = response;
            const action = setDataMovies(movies, pagination);
            dispatch(action);
            setPagination(pagination);
            setMovies([...movies]);
            setLoading(false);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        if (data.length) {
            const currentData = data.find((item) => item.pagination.page === filter.page);
            if (currentData) {
                setMovies([...currentData.movies]);
                setPagination(currentData.pagination);
            } else {
                getMoviesData();
            }
        } else {
            getMoviesData();
        }
    }, [filter]);

    useEffect(() => {
        setFilter({ ...filter, page: parseInt(page) });
    }, [page]);

    return (
        <section className="content">
            {!loading ? (
                <>
                    <MovieList movieList={movies} />
                    <Paging pagination={pagination} />
                </>
            ) : (<Loading />)}

        </section>
    );
}

export default Main;