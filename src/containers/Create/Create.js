import React from 'react' // eslint-disable-line
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateView from 'views/Create'

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
)(CreateView))
