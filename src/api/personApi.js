import axios from 'axios';
// import axiosClient from "./axiosClient";


const apiUrl = `${process.env.REACT_APP_API}/persons`;

const personApi = {
    getBySlug: async (slug) => {
        const option = {
            method: 'get',
            url: `${apiUrl}/${slug}`
        };
        const response = await axios(option);
        return response.data.data;
    },
};

export default personApi;