/*eslint-disable */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import Async from 'utils/Async'
// Components
import ScrollToTop from 'components/ScrollToTop'

// Components
const App = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/App'))
      },
      'App',
    )),
})
const Home = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Home'))
      },
      'Home',
    )),
})
const Login = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Login'))
      },
      'Login',
    )),
})
const Create = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Create'))
      },
      'Create',
    )),
})
const Story = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Story'))
      },
      'Story',
    )),
})

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <App>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/user' component={Login}/>
                <Route path='/create' component={Create}/>
                <Route path='/stories/:story_id' component={Story}/>
              </Switch>
            </App>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
