"use strict";

import axios from "axios";
import Cookie from 'js-cookie';

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || process.env.VUE_APP_API_URL
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json",
  Accept: "application/json",
};

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || process.env.VUE_APP_API_URL,
  // timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = Cookie.get('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios;
