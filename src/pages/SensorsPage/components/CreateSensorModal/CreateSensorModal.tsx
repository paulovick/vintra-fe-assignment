import React, { useState } from 'react'
import { Button, Modal, Paper, Switch, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import sensorsService from '../../../../services/sensorsService'

const useStyle = makeStyles({
  modalContent: {
    marginTop: 50,
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20
  },
  createForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  samplingPeriod: {
    marginTop: 20
  },
  isActiveContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  isActiveLabel: {
    flex: 1
  },
  saveButton: {
    marginTop: 30
  }
})

type CreateSensorModalProps = {
  isOpen: boolean
  handleSuccess: () => void
  handleClose: () => void
}


const CreateSensorModal = ({ isOpen, handleClose, handleSuccess }: CreateSensorModalProps) => {
  const [ description, setDescription ] = useState<string>('')
  const [ samplingPeriod, setSamplingPeriod ] = useState<number>(5)
  const [ isActive, setIsActive ] = useState<boolean>(true)

  const [ isCreating, setIsCreating ] = useState<boolean>(false)

  const classes = useStyle()

  const onCreateClick = () => {
    setIsCreating(true)
    sensorsService.create({
      description,
      samplingPeriod,
      isActive
    }).then(() => {
      setIsCreating(false)
      setDescription('')
      setSamplingPeriod(5)
      setIsActive(true)
      handleSuccess()
    }).catch(error => {
      setIsCreating(false)
      console.error('Error creating sensor', error)
    })
  }

  function updateSamplePeriod(value: string) {
    try {
      const period = parseInt(value)
      if (!isNaN(period)) {
        setSamplingPeriod(period)
      } else {
        setSamplingPeriod(0)
        console.log('WARN: Value is not int')
      }
    } catch (error) {
      console.log('WARN: Value is not int')
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      disableEnforceFocus
    >
      <Paper elevation={3} className={classes.modalContent}>
        <form className={classes.createForm}>
          <TextField
            id="create-sensor-description"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            className={classes.samplingPeriod}
            id="create-sensor-sampling-period"
            label="Sampling Period"
            variant="outlined"
            value={samplingPeriod}
            onChange={(event) => updateSamplePeriod(event.target.value)}
          />
          <div className={classes.isActiveContainer}>
            <Typography className={classes.isActiveLabel}>Active</Typography>
            <Switch value={isActive ? 'on' : 'off'} onClick={() => setIsActive(!isActive)} />
          </div>
          <Button disabled={isCreating} className={classes.saveButton} variant="contained" color="primary" onClick={onCreateClick}>Create sensor</Button>
        </form>
      </Paper>
    </Modal>
  )
}

export default CreateSensorModal