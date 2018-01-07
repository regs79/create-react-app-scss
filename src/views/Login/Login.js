import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Icon from 'components/Icon'
import PageHeadline from 'components/PageHeadline'

class Login extends React.Component {
  render() {
    return (
      <div className="container my-10">
        <div className="p-0 p-md-4 mb-4">
          <PageHeadline title="Let's create something new" />
        </div>
        <div className="row p-0 p-md-4 mx-0">
          <div className="col-lg-6 col-12">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="inputCheckRemember" />
                <label className="form-check-label" htmlFor="inputCheckRemember">Remember me?</label>
              </div>
              <div className="form-group mt-2">
                <label className="form-check-label" htmlFor="inputCheckRemember">
                  <a href="/">Forget Password?</a>
                </label>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-12">
            <h4>Join us via Social</h4>
            <div className="mt-4">
              <Link className="btn btn-primary btn-block" to="/">
                <Icon
                  icon="ion-social-facebook"
                  label="Join via Facebook"
                  size={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {

}

export default Login
