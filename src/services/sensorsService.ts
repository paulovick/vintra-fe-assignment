import http from '../lib/http/http'
import { Sensor } from '../models/Sensor'
import urls from '../lib/http/urls'

const sensorsService = {
  fetchAllSensors: (): Promise<Sensor[]> => {
    return new Promise((resolve, reject) => {
      http.get<Sensor[]>(urls.sensors.all())
        .then(sensors => resolve(sensors))
        .catch(error => reject(error))
    })
  }
}

export default sensorsService