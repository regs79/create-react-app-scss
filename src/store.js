import { applyMiddleware, createStore, compose } from 'redux'
import rootReducers from 'reducers'

const middlewares = []

if (process.env.NODE_ENV === `development`) {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducers);

export default store
