import {
  handleActions,
} from 'redux-actions'

const defaultState = {
  hello: 'Hi There',
}

const appReducer = handleActions({
  SAY_HELLO: (state, action) => {
    return state
  },
}, defaultState);

export default appReducer
