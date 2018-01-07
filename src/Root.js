/*eslint-disable */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'

// Components
import App from 'containers/App'
import Home from 'containers/Home'
import Login from 'containers/Login'
import Create from 'containers/Create'
import Story from 'containers/Story'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/user' component={Login}/>
              <Route path='/create' component={Create}/>
              <Route path='/stories/:story_id' component={Story}/>
            </Switch>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
