import axios from 'axios';

// TODO: Use react proxy https://create-react-app.dev/docs/proxying-api-requests-in-development/
// TODO: ENV is not working with heroku and docker file
const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  (config) => {
    return config;
  },
  // Do something with request error
  (error) => Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  (response) => response,
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  (error) => Promise.reject(error),
);

export default instance;
