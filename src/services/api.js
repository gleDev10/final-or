import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "http://localhost/origamid/wordpress-rest-api/ranek/wp-json/api/v1"
})
axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token
    if (config) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
export const api = {
  get (endpoint) {
    return axiosInstance.get(endpoint)
  },
  post (endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  put (endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  delete (endpoint) {
    return axiosInstance.delete(endpoint)
  },
  login (body) {
    return axios.post("http://localhost/origamid/wordpress-rest-api/ranek/wp-json/jwt-auth/v1/token", body)
  },
  validateToken () {
    return axios.post("http://localhost/origamid/wordpress-rest-api/ranek/wp-json/jwt-auth/v1/validade")
  }
}

export function getCep (cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`)
}