import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Header.scss'
import MediaQuery from 'components/MediaQuery'
import Icon from 'components/Icon'
import { Link } from 'react-router-dom'
import UserBox from 'components/UserBox'
import tawan from 'assets/images/tawan.jpg'
import logo from 'assets/images/logo.png'
import logoOnly from 'assets/images/logo-only.png'

export const Header = () => {
  return (
    <div className={cn('fixed-md-top', styles.header)}>
      <nav className={styles.navbarhomepage}>
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
            </ul>
            <ul className="list-inline m-0">
              <li className="list-inline-item">
                <Link to="/create" className="btn btn-warning small">Create</Link>
              </li>
              <MediaQuery down="sm" component="li" className="list-inline-item">
                <button type="button" className="btn btn-primary py-0 pl-1 pr-1">
                  <Icon icon="ion-android-more-horizontal" size={24} />
                </button>
              </MediaQuery>
              <MediaQuery up="md" component="li" className="list-inline-item">
                <Link to="/user" className="btn btn-primary">Join</Link>
              </MediaQuery>
              <MediaQuery up="md" component="li" className="list-inline-item">
                <UserBox
                  showMore={false}
                  showTime={false}
                  thumbnail={false}
                  username="Tawan"
                  photo={tawan}
                  fontColor="white"
                />
              </MediaQuery>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
}

Header.defaultProps = {
}

export default Header
