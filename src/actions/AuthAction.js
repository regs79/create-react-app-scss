import axios from 'axios'
import { createAction } from 'redux-actions'

export const loginReqest = createAction('AUTH_LOGIN_REQUEST', () => {
  return {
    isFetching: true,
  }
})

export const loginSuccess = createAction('AUTH_LOGIN_SUCCESS', ({ user }) => {
  return {
    isFetching: false,
    isAuthenticated: true,
    user,
    token: user.token,
  }
})

export const loginError = createAction('AUTH_LOGIN_FAILURE', () => {
  return {
    isFetching: false,
    isAuthenticated: false,
  }
})

export const getUserAccess = () => {
  return (dispatch) => {
    dispatch(loginReqest())
    const config = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': 'L9w5b1N919h1d2lr2E4HIc36sQd2qkly'
    }
    const request = axios.get('/api/auth', { headers: config })
    request.then((response) => {
      const { success, token, username } = response.data
      if(success) {
        const user = {
          token,
          username
        }
        dispatch(loginSuccess({ user }))
      }
    }).catch((err) => {
      dispatch(loginError())
    })
  }
}
