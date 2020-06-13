import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import { mocked } from 'ts-jest/utils'

import LoginPage from './LoginPage'
import { theme } from '../../App'
import { renderWithStore } from '../../../test/storeTestHelpers'
import authService from '../../services/authService'
import * as H from 'history'
import { AuthState } from '../../store/auth/types'

jest.mock('../../services/authService');
const mockAuthService = mocked(authService, true);

describe('<LoginPage />', () => {

  const mockHistory = { push: jest.fn() }

  const renderComponent = (authState: Partial<AuthState> = {}) => {
    const component = render(
      renderWithStore(
        <ThemeProvider theme={theme}>
          <LoginPage history={mockHistory as unknown as H.History} />
        </ThemeProvider>,
        { auth: authState }
      )
    )

    return {
      ...component,
      usernameInput: () => component.queryByLabelText('Username'),
      passwordInput: () => component.queryByLabelText('Password'),
      signInButton: () => component.queryByText('Sign in'),
      loadingIndicator: () => component.queryByText('Loging in...'),
      loadingIndicatorAsync: () => component.findByText('Loging in...')
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()

    mockAuthService.logIn.mockResolvedValue('some-auth-token')
  })

  it('renders without crashing', () => {
    const component = renderComponent()

    expect(component.usernameInput()).toBeInTheDocument()
    expect(component.passwordInput()).toBeInTheDocument()
    expect(component.signInButton()).toBeInTheDocument()
    expect(component.loadingIndicator()).not.toBeInTheDocument()
  })

  it('shows login in when is login in', () => {
    const component = renderComponent({ loginState: { isLoginIn: true }})

    expect(component.signInButton()).not.toBeInTheDocument()
    expect(component.loadingIndicator()).toBeInTheDocument()
  })
})