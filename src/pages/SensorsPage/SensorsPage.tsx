import React, { useEffect, useState } from 'react'
import { Container, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SensorsList from './components/SensorsList/SensorsList'
import { makeStyles } from '@material-ui/core/styles'
import CreateSensorModal from './components/CreateSensorModal/CreateSensorModal'
import { Sensor } from '../../models/Sensor'
import sensorsService from '../../services/sensorsService'
import LoadingIndicator from '../../lib/components/LoadingIndicator/LoadingIndicator'
import ErrorIndicator from '../../lib/components/ErrorIndicator/ErrorIndicator'
import { RootState } from '../../store'
import { connect, ConnectedProps } from 'react-redux'
import { Redirect } from 'react-router-dom'

const useStyle = makeStyles({
  listRoot: {
    marginTop: 50,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
}, { name: 'SensorsPage' })

const mapState = (state: RootState) => ({
  auth: state.auth
})

const connector = connect(mapState)

type SensorsPageProps = ConnectedProps<typeof connector>

const SensorsPage = ({ auth }: SensorsPageProps) => {
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)
  const [ sensors, setSensors ] = useState<Sensor[]>([
    { id: 0, description: 'asdnjasbdjb sdijb aijd ashijbd hiasb dhb ashkdkasb kdh', samplingPeriod: 10, isActive: true },
    { id: 1, description: 'asdnjasbdjb', samplingPeriod: 1000, isActive: false },
  ])
  const [ isFetching, setIsFetching ] = useState<boolean>()
  const [ error, setError ] = useState<string>()

  const fetchSensors = () => {
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
  }

  useEffect(fetchSensors, [])

  const classes = useStyle()

  const onCreateClick = () => {
    setIsModalOpen(true)
  }

  if (!auth.authToken) {
    return <Redirect to="/login" />
  }

  return (
    <Container>
      <CreateSensorModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        handleSuccess={() => {
          setIsModalOpen(false)
          fetchSensors()
        }}
      />

      <div className={classes.listRoot}>
        {isFetching && <LoadingIndicator />}
        {!isFetching && error && <ErrorIndicator />}
        {!isFetching && !error && <SensorsList sensors={sensors} />}
      </div>

      <Fab className={classes.fab} color="primary" onClick={onCreateClick}>
        <AddIcon />
      </Fab>
    </Container>
  )
}

export default connector(SensorsPage)