import {
  handleActions,
  createAction,
  // handleAction
} from 'redux-actions'

const defaultState = {
  hello: null,
  counter: 0,
}

const appReducer = handleActions({
  SAY_HELLO: (state, action) => {
    const counter = state.counter + action.payload.counter
    return {
      hello: `Hey! x ${counter}`,
      counter,
    }
  },
}, defaultState);

export default appReducer
