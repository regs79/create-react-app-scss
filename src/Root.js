import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import routes from './routes'
import Async from 'utils/Async'

const App = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/App'));
      },
      'App'
    )
  )
})

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Switch>
              {routes.map((route, key) => <Route key={key} {...route} />)}
            </Switch>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
