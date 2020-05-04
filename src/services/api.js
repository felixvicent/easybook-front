import axios from 'axios';

const api = axios.create({
    baseURL: 'https://easybook-eb.herokuapp.com',
});

export default api;