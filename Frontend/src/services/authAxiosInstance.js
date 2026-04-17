import axios from 'axios';
const authAxiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
  withCredentials:true
});
export default authAxiosInstance;