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
      <div className={cn('p-3 p-m-4', styles.register)}>
        <div className="view-container">
          <div className="d-flex">
            <div className="col-6 p-0 d-flex justify-content-start align-self-center">
              <p className={cn('lead m-0 d-flex align-items-center', styles.lead)}>Its not the same without you!</p>
            </div>
            <div className="col-6 p-0 d-flex justify-content-end align-self-center">
              <Link to="/user" className="btn btn-warning">Join us for free</Link>
            </div>
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
