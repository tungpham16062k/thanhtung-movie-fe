import axios from 'axios';
// import axiosClient from "./axiosClient";


const apiUrl = `${process.env.REACT_APP_API}/movies`;

const movieApi = {
    getAll: async (paramsString) => {
        var params = paramsString ? `?${paramsString}` : '';
        const option = {
            method: 'get',
            url: `${apiUrl}${params}`
        };
        const response = await axios(option);
        return response.data.data;
    },
    getBySlug: async (slug) => {
        const option = {
            method: 'get',
            url: `${apiUrl}/${slug}`
        };
        const response = await axios(option);
        return response.data.data;
    },
    getFavorites: async (token) => {
        const option = {
            method: 'get',
            url: `${apiUrl}/getFavorites`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios(option);
        return response.data.data;
    }
    // destroy: async () => {
    //     const option = {
    //         method: 'delete',
    //         url: `${apiUrl}`,
    //     };
    //     const response = await axios(option);
    //     return response.data.data;
    // }
};

export default movieApi;