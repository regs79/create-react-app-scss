import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Menu.scss'
import { NavLink } from 'react-router-dom'

const menuMockup = [
  {
    title: 'หน้าแรก',
    path: '/'
  },
  {
    title: 'ข่าวสาร',
    path: '/news',
  },
  {
    title: 'พูดคุยทั่วไป',
    path: '/talk',
  },
  {
    title: 'กิน-เที่ยว',
    path: '/eat-travel',
  },
  {
    title: 'งาน',
    path: '/jobs',
  },
  {
    title: 'ที่พัก',
    path: '/stay',
  },
  {
    title: 'กิจกรรม',
    path: '/events',
  },
  {
    title: 'ซื้อ-ขาย',
    path: '/market',
  },
]

export const Menu = ({ children }) => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <ul className="list-unstyled">
          {menuMockup.map(({ title, active, path }, key) => (
            <li className="inline-block" key={key + new Date()}>
              <NavLink to={path} className={styles.item} activeClassName={styles.active}>
              {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Menu
