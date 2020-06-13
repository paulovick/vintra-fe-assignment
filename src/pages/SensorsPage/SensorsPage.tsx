import React from 'react'
import { Container, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SensorsList from './components/SensorsList/SensorsList'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
}, { name: 'SensorsPage' })

const SensorsPage = () => {
  const classes = useStyle()

  return (
    <Container>
      <SensorsList />

      <Fab className={classes.fab} color="primary">
        <AddIcon />
      </Fab>
    </Container>
  )
}

export default SensorsPage