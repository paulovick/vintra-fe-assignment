import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from './auth'

const rootReducer = combineReducers({
  auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))
