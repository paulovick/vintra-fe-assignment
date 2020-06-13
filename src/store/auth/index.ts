import { AuthActionTypes, AuthState, LOGIN_RECEIVED, LOGIN_REQUESTED } from './types'

const initialState: AuthState = {
  authToken: undefined,
  loginState: {
    isLoginIn: false
  }
}

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch(action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        loginState: {
          ...state.loginState,
          isLoginIn: true
        }
      }
    case LOGIN_RECEIVED:
      return {
        ...state,
        authToken: action.payload.authToken,
        loginState: {
          isLoginIn: false
        }
      }
    default:
      return state
  }
}