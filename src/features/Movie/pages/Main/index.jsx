import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import MovieList from '../../components/MovieList';
import Paging from '../../../../components/Paging';
import Loading from '../../../../components/Loading';
import movieApi from '../../../../api/movieApi';


const Main = (props) => {
    const page = props.match.params.page;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        page: parseInt(page) || 1,
        limit: 12,
        totalRows: 1,
    });
    const [filter, setFilter] = useState({
        page: parseInt(page) || 1,
        limit: 12,
    });

    useEffect(() => {
        const getMoviesData = async () => {
            try {
                setLoading(true);
                const paramsString = queryString.stringify(filter);
                const response = await movieApi.getAll(paramsString);
                const { movies, pagination } = response;
                setPagination(pagination);
                setMovies([...movies]);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        getMoviesData();
    }, [filter]);

    useEffect(() => {
        setFilter({ ...filter, page: page });
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