import http from '../lib/http/http'
import { Sensor } from '../models/Sensor'
import urls from '../lib/http/urls'

interface SensorRequest {
  description: string
  samplingPeriod: number
  isActive: boolean
}

const sensorsService = {
  fetchAllSensors: (): Promise<Sensor[]> => {
    return new Promise((resolve, reject) => {
      http.get<Sensor[]>(urls.sensors.all())
        .then(sensors => resolve(sensors))
        .catch(error => reject(error))
    })
  },
  create: (sensorRequest: SensorRequest) => {
    return new Promise((resolve, reject) => {
      http.post<Sensor[]>(urls.sensors.create(), sensorRequest)
        .then(sensors => resolve(sensors))
        .catch(error => reject(error))
    })
  }
}

export default sensorsService