import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import LoginPage from './LoginPage'
import { render } from '@testing-library/react'
import { theme } from '../../App'

describe('<LoginPage />', () => {

  const renderComponent = () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    )

    return {
      ...component,
      usernameInput: () => component.queryByLabelText('Username'),
      passwordInput: () => component.queryByLabelText('Password')
    }
  }

  it('renders without crashing', () => {
    const component = renderComponent()

    expect(component.usernameInput()).toBeInTheDocument()
    expect(component.passwordInput()).toBeInTheDocument()
  })


})