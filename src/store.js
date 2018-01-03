/*eslint-disable */

import { applyMiddleware, createStore, compose } from 'redux'
import rootReducers from 'reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]
if (process.env.NODE_ENV === `development`) {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducers);

export default store
