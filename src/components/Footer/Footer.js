import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Footer.scss'

const Footer = ({
  isHome,
}) => {
  return (
    <footer className={cn('d-flex align-items-end', styles.container, {
      'fixed-lg-bottom': !isHome,
    })}
    >
      <div className="container">
        <div className="d-flex justify-content-between py-5">
          <div>
            LOGO
          </div>
          <ul className="list-inline m-0">
            <li className="list-inline-item mr-3">
              <a href="/" className="text-dark">FAQ</a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="/" className="text-dark">Community guidelines</a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="/" className="text-dark">Privacy policy</a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="/" className="text-dark">Terms of use</a>
            </li>
            <li className="list-inline-item mr-3">
              <span className="text-dark">© 2018 Atlassian</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  isHome: PropTypes.bool,
}

Footer.defaultProps = {
  isHome: true,
}

export default Footer
