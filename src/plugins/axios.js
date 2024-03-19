import axios from "axios";

let config = {};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const axiosPlugin = {
  install: function(app) {
    app.config.globalProperties.$axios = _axios;
  }
};

export default axiosPlugin;

