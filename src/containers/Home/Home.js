import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Home from 'views/Home'

// Actions
import { sayHello } from 'actions/AppAction'

const mapStateToProps = (state) => {
  const { app } = state
  return {
    hello: app.hello,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sayHello: sayHello,
  }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home))
