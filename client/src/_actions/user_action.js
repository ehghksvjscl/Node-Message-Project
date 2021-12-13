import Axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types'

export function loginUser(params) {
    const request =  Axios.post('/api/users/login', params)
    .then(response => response.data )
    return {
        type: LOGIN_USER,
        payload: request 
    }
}

export function registerUser(params) {
    const request =  Axios.post('/api/users/register', params)
    .then(response => response.data )
    return {
        type: REGISTER_USER,
        payload: request 
    }
}

export function auth() {
    const request =  Axios.get('/api/users/auth')
    .then(response => response.data )
    return {
        type: AUTH_USER,
        payload: request 
    }
}