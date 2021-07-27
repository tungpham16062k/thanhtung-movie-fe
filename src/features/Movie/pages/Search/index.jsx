import React, { useRef, useState } from 'react';
import queryString from 'query-string';

import MovieList from '../../components/MovieList';
import movieApi from '../../../../api/movieApi';
import './Search.scss';


const Search = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([]);
    const typingTimeoutRef = useRef(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(async () => {
            console.log(1);
            try {
                const paramsString = queryString.stringify({ title_like: searchInput });
                const response = await movieApi.getAll(paramsString);
                const { movies } = response;
                setMovies(movies);
            } catch (error) {
                console.log('Error');
            }
        }, 100);
    }

    return (
        <section className="content">
            <section className="search">
                <div className="container">
                    <input type="text" className="search__input" spellCheck={false} placeholder="Nhập tên phim" onChange={(e) => handleInputChange(e)} />
                    <MovieList movieList={movies} />
                </div>
            </section>

        </section>
    );
}

export default Search;