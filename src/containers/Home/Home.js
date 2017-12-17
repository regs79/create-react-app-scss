import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Home from 'views/Home'
import { refundsData } from 'fixtures/refunds'
import { issuessData } from 'fixtures/issuess'

const mapStateToProps = (state) => {
  return {
    state,
    issuessData,
    refundsData,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home))
