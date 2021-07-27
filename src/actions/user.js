export const updateCurrentUser = (user) => {
    return {
        type: 'UPDATE_CURRENT_USER',
        payload: {
            ...user
        },
    }
}

export const updateFavorites = (favorites) => {
    return {
        type: 'UPDATE_FAVORITES',
        payload: favorites,
    }
}


export const deleteCurrentUser = () => {
    return {
        type: 'DELETE_CURRENT_USER',
    }
}