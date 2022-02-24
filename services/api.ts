import axios from 'axios'

const api = axios.create({
    baseURL:'http://127.0.0.1:8000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },

})

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('@token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

export default api