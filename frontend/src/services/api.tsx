import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

const token = document.cookie.split(';')
.find(row => row.startsWith('token='))
?.split('=')[1];

if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;