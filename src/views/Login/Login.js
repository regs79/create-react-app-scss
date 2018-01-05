import React from 'react'
// import PropTypes from 'prop-types'

import PageHeadline from 'components/PageHeadline'

class Login extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <div className="container">
          <div className="p-4 mt-5">
            <PageHeadline title="Login" />
          </div>
          <div className="row p-4 mx-0">
            Login
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {

}

export default Login
