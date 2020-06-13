import React, { useCallback, useEffect, useState } from 'react'
import {
  Button,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { logIn } from '../../store/auth/actions'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../store'

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

const mapState = ({ auth }: RootState) => ({
  auth
})

const mapDispatch = {
  logIn
}

const connector = connect(mapState, mapDispatch)

type LoginPageProps = ConnectedProps<typeof connector> & Pick<RouteComponentProps, 'history'>

const LoginPage = ({ logIn, history, auth }: LoginPageProps) => {
  const [ username, setUsername ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  useEffect(() => {
    if (!auth.loginState.isLoginIn && auth.authToken) {
      history.push('/sensors')
    }
  }, [history, auth])

  const classes = useStyles()

  const onSignInClick = () => {
    logIn(username, password)
  }

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4" align="center">Welcome to ThermoCo!</Typography>
      <form className={classes.loginForm}>
        <TextField
          id="login-username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          className={classes.passwordInput}
          id="login-password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <Button
        className={classes.signInButton}
        color="primary"
        size="large"
        variant="contained"
        onClick={onSignInClick}
        disabled={auth.loginState.isLoginIn}
      >
        {auth.loginState.isLoginIn ? 'Loging in...' : 'Sign in'}
      </Button>
    </Paper>
  )
}

export default connector(LoginPage)