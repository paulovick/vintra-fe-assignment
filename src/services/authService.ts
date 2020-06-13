import http from '../lib/http/http'
import urls from '../lib/http/urls'

interface LoginResponse {
  access_token: string,
  token_type: string
}

const authService = {
  logIn: (username: string, password: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const bodyFormData = new FormData();
      bodyFormData.set('username', username)
      bodyFormData.set('password', password)

      http.post<LoginResponse>(urls.auth.login(), bodyFormData, false)
        .then(response => resolve(response.access_token))
        .catch(error => reject(error))
    })
  }
}

export default authService