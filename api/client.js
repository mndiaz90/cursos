const axios = require('axios');

let axiosInstance = axios.create({
    baseURL: process.env.baseURL || "http://localhost:8080/"
    /* other custom settings */
});

module.exports = axiosInstance;