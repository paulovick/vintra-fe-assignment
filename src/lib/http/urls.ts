
const baseUrl = 'http://localhost:8000'

const urls = {
  auth: {
    login: () => `${baseUrl}/auth/login`
  },
  sensors: {
    all: () => `${baseUrl}/api/v1/sensors/`
  }
}

export default urls