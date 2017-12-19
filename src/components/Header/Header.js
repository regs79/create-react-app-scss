import React from 'react'
// import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import Button from 'components/Button'
import cn from 'classnames'
import styles from './Header.scss'
import { Link } from 'react-router-dom'

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
    label: 'Jobs',
    link: '/'
  },
  {
    label: 'House',
    link: '/'
  },
  {
    label: 'Market',
    link: '/'
  },
]

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={cn('left', styles.hamburger)}>
          <a href="/">
            <Icon icon='ion-android-menu' size={32} />
          </a>
        </div>
        <nav className={cn('left', styles.navMenuLink)}>
          <ul>
            {MENU.map((menu, key) => (
              <li key={key}>
                <Link
                  to={menu.link}
                  className={styles.link}
                  >
                  {React.createElement('span', {}, menu.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={cn('right', styles.navMenu)}>
          <ul>
            <li>
              <a href="#fav">
                <Icon icon='ion-android-favorite-outline' size={32} />
                <span className={styles.label}>Favorites</span>
              </a>
            </li>
            <li>
              <a href="#message">
                <Icon icon='ion-android-notifications-none' size={32} />
                <span className={styles.label}>Messages</span>
              </a>
            </li>
            <li>
              <a href="#user">
                <Icon icon='ion-android-person' size={32} />
                <span className={styles.label}>Account</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
};

export default Header
