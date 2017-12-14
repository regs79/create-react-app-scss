import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import JobViews from 'views/Jobs'

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
)(JobViews))
