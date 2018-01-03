import { handleActions } from 'redux-actions'

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  token: {},
  user: {},
}

const appReducer = handleActions({
  AUTH_LOGIN_REQUEST: (state, action) => {
    const { isFetching } = action.payload
    return Object.assign({}, state, {
      isFetching,
    })
  },
  AUTH_LOGIN_SUCCESS: (state, action) => {
    const {
      isFetching,
      isAuthenticated,
      user,
      token,
    } = action.payload
    return Object.assign({}, state, {
      isFetching,
      isAuthenticated,
      user,
      token,
    })
  },
  AUTH_LOGIN_FAILURE: (state, action) => {
    const { isFetching, isAuthenticated } = action.payload
    return Object.assign({}, state, {
      isFetching,
      isAuthenticated,
    })
  },
}, initialState)

export default appReducer
