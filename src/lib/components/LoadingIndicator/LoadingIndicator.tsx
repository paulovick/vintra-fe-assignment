import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    alignSelf: 'stretch',
    margin: 20
  }
}, { name: 'LoadingIndicator ' })

const LoadingIndicator = () => {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Typography align="center">Loading...</Typography>
    </div>
  )
}

export default LoadingIndicator