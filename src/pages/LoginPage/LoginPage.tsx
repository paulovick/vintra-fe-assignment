import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    width: 800
  }
}, { name: 'LoginPage' })

const LoginPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography>Welcome to ThermoCo!</Typography>
        </CardContent>
        <CardActions>
          <Button>Sign in</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default LoginPage