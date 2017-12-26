import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import Button from 'components/Button'
import cn from 'classnames'
import styles from './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import MediaQuery from 'components/MediaQuery'

const MENU = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Explore',
    link: '/explore'
  },
  {
    label: 'House',
    link: '/houses'
  },
  {
    label: 'Jobs',
    link: '/jobs'
  },
  {
    label: 'Market',
    link: '/market'
  },
]

export const Header = ({
  handleOpenDrawer,
}) => {
  return (
    <nav className={cn('navbar navbar-expand-lg justify-content-between navbar-light bg-light', styles.navbar)}>
      <div className="navbar-brand" onClick={handleOpenDrawer}>
        <span className="navbar-toggler-icon"></span>
      </div>
      <MediaQuery up="lg">
        <ul className={cn('navbar-nav mr-auto', styles.mainNavbar)}>
          {MENU.map((menu, key) => (
            <li key={key} className={cn('nav-item', styles.navItem)}>
              <NavLink exact className={cn('nav-link', styles.link)} to={menu.link} activeClassName={styles.active}>
                <span className={styles.label}>
                  {menu.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </MediaQuery>
      <ul className={cn('nav justify-content-end', styles.secondNavbar)}>
        <li className={cn('nav-item', styles.navItem)}>
          <Link className={cn('nav-link', styles.link)} to="/">
            <Icon icon='ion-android-favorite-outline' size={32} className={styles.icon} />
            <span className={styles.label}>My Favorites</span>
          </Link>
        </li>
        <li className={cn('nav-item', styles.navItem)}>
          <Link className={cn('nav-link', styles.link)} to="/">
            <Icon icon='ion-android-notifications-none' size={32} className={styles.icon} />
            <span className={styles.label}>Messages</span>
          </Link>
        </li>
        <li className="nav-item">
          <Button darkpink className="text-white">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
}

Header.propTypes = {
  handleOpenDrawer: PropTypes.func,
};

Header.defaultProps = {
  handleOpenDrawer: null,
};

export default Header
