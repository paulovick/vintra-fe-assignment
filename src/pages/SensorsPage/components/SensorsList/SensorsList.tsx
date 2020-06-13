import React  from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Sensor } from '../../../../models/Sensor'

interface SensorListProps {
  sensors: Sensor[]
}

const SensorsList = ({ sensors }: SensorListProps) => {
  return (
    <TableContainer component={Paper}>
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
  )
}

export default SensorsList