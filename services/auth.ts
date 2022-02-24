import api from './api'
import { ILogin, IRegister, IUser } from './types/authTypes'



export default {
    login : (data:ILogin) => api.post<IUser>('/login', data),
    register : (data:IRegister) => api.post<IUser>('/register', data),
    get: () => api.get('/getUser'),
    logout: () => api.get('/logout')
}


