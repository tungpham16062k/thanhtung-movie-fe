
const initialState = {
    list: [],
    selectedMovie: null,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            }
        }
        default:
            return state;
    }
};
export default movieReducer;