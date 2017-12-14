import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserView from 'views/User'

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//   }, dispatch)
// }

export default withRouter(connect(
  mapStateToProps,
  // mapDispatchToProps
  null,
)(UserView))
