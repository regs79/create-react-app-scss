import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Hero.scss'

import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div>
      <div className={cn('jumbotron jumbotron-fluid text-light mb-0 mt-4', styles.hero)}>
        <div className="container">
          <h1 className="display-5">
            Connect. Share. Learn.
          </h1>
          <p className="lead">Find answers, support, and inspiration from other Atlassian users</p>
        </div>
      </div>
      <div className={cn('p-4', styles.register)}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className="lead m-0 d-flex align-items-center">Its not the same without you!</p>
            <Link to="/user" className="btn btn-warning">Sign up for free</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
}

Hero.defaultProps = {
}

export default Hero
