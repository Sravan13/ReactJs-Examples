import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myapp.abc.com/'
});

export default instance;
