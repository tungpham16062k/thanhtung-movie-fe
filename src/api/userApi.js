import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API}/users`;

const userApi = {
    login: async (user) => {
        const option = {
            method: 'post',
            url: `${apiUrl}/login`,
            data: user,
        };
        const response = await axios(option);
        return response.data.data;
    },
    register: async (user) => {
        const option = {
            method: 'post',
            url: `${apiUrl}/register`,
            data: user,
        };
        const response = await axios(option);
        return response.data.data;
    },
    addFav: async (token, movieId) => {
        const option = {
            method: 'patch',
            url: `${apiUrl}/addFav/${movieId}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios(option);
        return response.data.data;
    },
    removeFav: async (token, movieId) => {
        const option = {
            method: 'patch',
            url: `${apiUrl}/removeFav/${movieId}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios(option);
        return response.data.data;
    },
    getCurrent: async (token) => {
        const option = {
            method: 'get',
            url: `${apiUrl}/getCurrent`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios(option);
        return response.data.data;
    },
    // destroy: async () => {
    //     const option = {
    //         method: 'delete',
    //         url: `${apiUrl}`,
    //     };
    //     const response = await axios(option);
    //     return response.data.data;
    // }
};

export default userApi;