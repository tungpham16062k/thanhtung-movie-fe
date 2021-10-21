export const setDataMovies = (movies, pagination) => {
    return {
        type: 'SET_DATA_MOVIES',
        payload: { movies, pagination },
    }
}