import axios from 'axios'
import { store } from '../../store'

const getHeaders = (shouldAuthorize: boolean = true) => {
  const { authToken } = store.getState().auth

  return shouldAuthorize && authToken ? {
    Authorization: `Bearer ${authToken}`
  } : {}
}

const http = {
  get: <TResponse>(url: string): Promise<TResponse> => {
    return new Promise<TResponse>((resolve, reject) => {
      axios.get<TResponse>(url, { headers: getHeaders() })
        .then(response => {
          if (response.status === 200) {
            resolve(response.data)
          } else {
            reject({ statusCode: response.status, message: response.statusText })
          }
        })
        .catch(error => reject(error))
    })
  },
  post: <TResponse>(url: string, data?: any, shouldAuthorize: boolean = true): Promise<TResponse> => {
    return new Promise<TResponse>((resolve, reject) => {
      axios.post<TResponse>(url, data,{ headers: getHeaders(shouldAuthorize) })
        .then(response => {
          if (response.status === 200 || response.status === 201) {
            resolve(response.data)
          } else {
            reject({ statusCode: response.status, message: response.statusText })
          }
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },

  delete: (url: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      axios.delete(url, { headers: getHeaders() })
        .then((response) => {
          if (response.status === 204) {
            resolve()
          } else {
            reject()
          }
        })
        .catch(reject)
    })
  }
}

export default http
