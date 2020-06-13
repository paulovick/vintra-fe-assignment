import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import 'fontsource-roboto'

import LoginPage from './pages/LoginPage/LoginPage'
import SensorsPage from './pages/SensorsPage/SensorsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sensors" component={SensorsPage} />
        <Redirect to="/sensors" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
