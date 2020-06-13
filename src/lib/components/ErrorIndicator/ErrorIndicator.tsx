import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    alignSelf: 'stretch',
    margin: 20
  }
}, { name: 'ErrorIndicator ' })

const ErrorIndicator = () => {
  const classes = useStyle()
  
  return (
    <div className={classes.root}>
      <Typography color="error" align="center">There was some error</Typography>
    </div>
  )
}

export default ErrorIndicator