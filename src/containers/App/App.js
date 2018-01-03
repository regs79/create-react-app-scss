import React from 'react' // eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from 'views/App'

import {
  getUserAccess,
} from 'actions/AuthAction'

const mapStateToProps = (state) => {
  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserAccess,
  }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
