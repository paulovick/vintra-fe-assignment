import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Sensor } from '../../../../models/Sensor'
import sensorsService from '../../../../services/sensorsService'
import LoadingIndicator from '../../../../lib/components/LoadingIndicator/LoadingIndicator'
import ErrorIndicator from '../../../../lib/components/ErrorIndicator/ErrorIndicator'

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
}, { name: 'SensorsList' })

const SensorsList = () => {
  const [ sensors, setSensors ] = useState<Sensor[]>([
    { id: 0, description: 'asdnjasbdjb sdijb aijd ashijbd hiasb dhb ashkdkasb kdh', samplingPeriod: 10, isActive: true },
    { id: 1, description: 'asdnjasbdjb', samplingPeriod: 1000, isActive: false },
  ])
  const [ isFetching, setIsFetching ] = useState<boolean>()
  const [ error, setError ] = useState<string>()

  useEffect(() => {
    setIsFetching(true)

    sensorsService.fetchAllSensors()
      .then(sensors => {
        setError(undefined)
        setSensors(sensors)
        setIsFetching(false)
      })
      .catch(error => {
        setError(error.message)
        setIsFetching(false)
      })
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isFetching && <LoadingIndicator />}
      {!isFetching && error && <ErrorIndicator />}
      {!isFetching && !error &&
        <TableContainer component={Paper} className={classes.root}>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Sampling Period</TableCell>
                      <TableCell align="right">State</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {sensors.map((sensor) => (
                  <TableRow key={`${sensor.id}`}>
                    <TableCell component="th" scope="row">{sensor.id}</TableCell>
                    <TableCell>{sensor.description}</TableCell>
                    <TableCell align="right">{sensor.samplingPeriod}</TableCell>
                    <TableCell align="right">{sensor.isActive ? 'Active' : 'Inactive'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
        </TableContainer>
      }
    </div>
  )
}

export default SensorsList