import axios from 'axios';
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});
API.interceptors.request.use(req => {
  const t = localStorage.getItem('access');
  if (t) req.headers.Authorization = `Bearer ${t}`;
  return req;
});
export default API;
