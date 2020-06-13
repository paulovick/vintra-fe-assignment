import { AppThunk } from '../types'
import { LOGIN_RECEIVED, LOGIN_REQUESTED, LoginReceivedAction, LoginRequestedAction } from './types'
import authService from '../../services/authService'
import { Dispatch } from 'redux'

const logInRequested = (): LoginRequestedAction => ({
  type: LOGIN_REQUESTED
})

const logInReceived = (authToken: string): LoginReceivedAction => ({
  type: LOGIN_RECEIVED,
  payload: {
    authToken
  }
})

export const logIn = (username: string, password: string): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch(logInRequested())

    authService.logIn(username, password)
      .then(authToken => dispatch(logInReceived(authToken)))
      .catch(error => console.error('Error login in', error))
  }
}