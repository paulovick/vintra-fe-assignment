import React from 'react'
import {
  Button,
  Paper,
  PropTypes,
  TextField,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
    alignSelf: 'stretch'
  },
  passwordInput: {
    marginTop: 30
  },
  signInButton: {
    marginTop: 50
  }
}, { name: 'LoginPage' })

const LoginPage = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4" align="center">Welcome to ThermoCo!</Typography>
      <form className={classes.loginForm}>
        <TextField id="login-username" label="Username" variant="outlined" />
        <TextField className={classes.passwordInput} id="login-password" label="Password" variant="outlined" />
      </form>
      <Button
        className={classes.signInButton}
        color="primary"
        size="large"
        variant="contained"
      >Sign in</Button>
    </Paper>
  )
}

export default LoginPage