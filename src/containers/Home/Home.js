import React from 'react' // eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Home from 'views/Home'

// Actions
import { sayHello } from 'actions/AppAction'

const mapStateToProps = (state) => {
  const { app, auth } = state
  const { user } = auth
  return {
    userInfo: user,
    hello: app.hello,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sayHello,
  }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home))
