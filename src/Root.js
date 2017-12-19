import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
// Components
import App from 'containers/App'
import Home from 'containers/Home'
import Explore from 'containers/Explore'
// import Events from 'containers/Events'
// import Jobs from 'containers/Jobs'
// import House from 'containers/House'
// import Market from 'containers/Market'
// import User from 'containers/User'
// import Login from 'components/Login'
// import Signup from 'components/Signup'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/explore' component={Explore}/>
              {/* <Route exact path='/events' component={Events}/>
              <Route exact path='/jobs' component={Jobs}/>
              <Route exact path='/house' component={House}/>
              <Route exact path='/market' component={Market}/>
              <Route exact path='/user/:id' component={User} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} /> */}
            </Switch>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
