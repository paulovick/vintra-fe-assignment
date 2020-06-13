
export interface AuthState {
  authToken?: string,
  loginState: {
    isLoginIn: boolean
  }
}


export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_RECEIVED = 'LOGIN_RECEIVED'

export interface LoginRequestedAction {
  type: typeof LOGIN_REQUESTED
}

export interface LoginReceivedAction {
  type: typeof LOGIN_RECEIVED,
  payload: {
    authToken: string
  }
}

export type AuthActionTypes = LoginRequestedAction | LoginReceivedAction