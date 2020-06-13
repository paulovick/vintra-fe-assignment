import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import LoginPage from './pages/LoginPage/LoginPage'
import SensorsPage from './pages/SensorsPage/SensorsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage} />
      <Route path="/sensors" component={SensorsPage} />
      <Route path="/" component={() => <Redirect to="/sensors" />} />
    </BrowserRouter>
  )
}

export default App
