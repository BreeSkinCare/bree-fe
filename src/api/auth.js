// src/api/auth.js
import axios from './axios';

export const register = (registerData) => {
    return axios.post('/auth/register', registerData);
};

export const login = (loginData) => {
    return axios.post('/auth/authenticate', loginData, { withCredentials: true });
};

export const refreshToken = () => {
    return axios.post('/auth/refresh-token');
};
