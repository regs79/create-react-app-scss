import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Header.scss'

import { Link } from 'react-router-dom'

export const Header = ({
  isHome,
}) => {
  const headerClasses = cn({
    [styles.navbarhomepage]: isHome,
    [styles.navbarnormal]: !isHome,
  })

  return (
    <div className={cn('fixed-top', styles.header)}>
      <nav className={headerClasses}>
        <div className="container">
          <div className="d-flex justify-content-between p-2">
            <div className="">
              <ul className="list-inline m-0">
                <li className="list-inline-item">LOGO</li>
                {isHome &&
                  <li className="list-inline-item">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary dropdown-toggle">
                        Action
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="/">Separated link</a>
                      </div>
                    </div>
                  </li> }
                {isHome &&
                  <li className="list-inline-item">
                    {/* <input type="password" id="inputPassword5" className="form-control p-1" aria-describedby="passwordHelpBlock" /> */}
                    <form className="form-inline m-0">
                      <input className="form-control p- mr-sm-2" type="search" placeholder="Search" />
                      <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </li>
                }
              </ul>
            </div>
            <div className="">
              <ul className="list-inline m-0">
                <li className="list-inline-item">
                  <Link to="/create" className="btn btn-primary small">Create</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/user" className="btn btn-primary">Login</Link>
                </li>
                <li className="list-inline-item">
                  <div className={cn('btn-group btn-group-sm', styles.lang)} role="group" aria-label="Basic example">
                    <button type="button" className="btn">ENG</button>
                    <button type="button" className="btn btn-secondary">THB</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  isHome: PropTypes.bool,
}

Header.defaultProps = {
  isHome: true,
}

export default Header
