const initState = {
    userName: null,
    email: null,
    role: null,
    favorites: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_USER': {
            const { userName, favorites, email, role } = action.payload;
            return {
                ...state,
                userName: userName,
                email: email,
                role: role,
                favorites: [...favorites]
            }
        }
        case 'UPDATE_FAVORITES': {
            const newFavorites = [...action.payload];
            return {
                ...state,
                favorites: newFavorites,
            }
        }
        case 'DELETE_CURRENT_USER': {
            return initState;
        }
        default: return state
    }
}

export default userReducer;