/*eslint-disable */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
// Components
import App from 'containers/App'
import Home from 'containers/Home'
import About from 'containers/About'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
