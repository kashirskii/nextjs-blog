import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': 'localhost:8000'
  }
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/refresh`, undefined, { withCredentials: true })
        .then((response) => {
            localStorage.setItem('token', response.data.access_token)
            return instance.request(error.config)
        })
        .catch((err) => Promise.reject(err.config));
    }
  }
);

export default instance