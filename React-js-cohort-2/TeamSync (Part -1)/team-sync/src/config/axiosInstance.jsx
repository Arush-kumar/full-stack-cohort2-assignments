import axios from 'axios'

export let axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
})
