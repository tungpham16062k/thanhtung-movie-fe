
const initialState = {
    data: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA_MOVIES': {
            const newList = [...state.data];
            newList.push(action.payload);
            return {
                ...state,
                data: newList,
            }
        }
        default:
            return state;
    }
};
export default movieReducer;