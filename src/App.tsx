import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import 'fontsource-roboto'


import LoginPage from './pages/LoginPage/LoginPage'
import SensorsPage from './pages/SensorsPage/SensorsPage'

import { store } from './store'

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "rgba(0, 0, 0, 0.04)"
    }
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/sensors" component={SensorsPage} />
            <Redirect to="/sensors" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
