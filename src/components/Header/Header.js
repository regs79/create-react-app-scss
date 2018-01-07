import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Header.scss'
import MediaQuery from 'components/MediaQuery'
import Icon from 'components/Icon'
import { Link } from 'react-router-dom'

import logo from 'assets/images/logo.png'
import logoOnly from 'assets/images/logo-only.png'

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
        <div className="view-container">
          <div className="d-flex justify-content-between p-1">
            <ul className="list-inline m-0">
              <li className="list-inline-item">
                <button type="button" className="btn btn-primary py-0 pl-1 pr-1">
                  <Icon icon="ion-navicon-round" size={24} />
                </button>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <MediaQuery down="sm">
                    <img src={logoOnly} alt="Logo" />
                  </MediaQuery>
                  <MediaQuery up="md">
                    <img src={logo} alt="Logo" />
                  </MediaQuery>
                </Link>
              </li>
              {/* {isHome &&
                <MediaQuery up="lg">
                  <li className="list-inline-item">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary dropdown-toggle">
                        Explore
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="/">Separated link</a>
                      </div>
                    </div>
                  </li>
                </MediaQuery>
              } */}
              {/* {isHome &&
                <MediaQuery up="md" component="li" className="list-inline-item">
                  <form className="form-inline m-0">
                    <input className={cn('form-control p- mr-sm-2', styles.searchform)} type="search" placeholder="Search" />
                    <Icon
                      className="pl-2 text-light"
                      icon="ion-search"
                      size={24}
                    />
                  </form>
                </MediaQuery>
              } */}
            </ul>
            <ul className="list-inline m-0">
              {/* {isHome &&
                <li className="list-inline-item">
                  <Link to="/create" className="btn btn-warning small">Create</Link>
                </li>
              } */}
              {
                <MediaQuery down="md" component="li" className="list-inline-item">
                  <button type="button" className="btn btn-primary py-0 pl-1 pr-1">
                    <Icon icon="ion-android-more-horizontal" size={24} />
                  </button>
                </MediaQuery>
              }
              {/* <MediaQuery up="md" component="li" className="list-inline-item">
                <Link to="/user" className="btn btn-primary">Join</Link>
              </MediaQuery> */}
              {/* {isHome &&
              <MediaQuery up="md" component="li" className="list-inline-item">
                <div className={cn('btn-group btn-group-sm', styles.lang)} role="group" aria-label="Basic example">
                  <button type="button" className="btn">ENG</button>
                  <button type="button" className="btn btn-secondary">THB</button>
                </div>
              </MediaQuery>
            } */}
            </ul>
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
