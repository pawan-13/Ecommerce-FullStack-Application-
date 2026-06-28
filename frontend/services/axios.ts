'use client'

import axios from 'axios'

const instance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BASEURL,
    headers : {
        "Content-Type" : "application/json",
    },
});

export default instance;

instance.interceptors.request.use(
    (config) => {
        // You can modify the request config here if needed
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        // You can modify the response here if needed
        localStorage.setItem('token', response?.data?.token?.access_token)
        return response;
    },
    (error) => {
        // Handle response errors here
        if(error.response && error.response.status === 401){
            localStorage.removeItem('token')
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)