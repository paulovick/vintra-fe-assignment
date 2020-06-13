import React, { ReactElement } from 'react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import { AuthState } from '../src/store/auth/types'
import { RootState } from '../src/store'

const mockStore = configureStore();

const defaultInitialState: RootState = {
  auth: {
    authToken: undefined,
    loginState: {
      isLoginIn: false
    }
  }
}

export interface InitialStatePartial {
  auth?: Partial<AuthState>,
}

export const renderWithStore = (component: ReactElement, initialState?: InitialStatePartial) => {
  const store: RootState = initialState ? {
    auth: {
      ...defaultInitialState.auth,
      ...(initialState.auth ? initialState.auth : {})
    }
  } : defaultInitialState

  return (
    <Provider store={mockStore(store)}>
      {component}
    </Provider>
  )
}