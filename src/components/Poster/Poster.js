import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import avatar from 'assets/images/avatar.jpg'

import styles from './Poster.scss'

export const Poster = ({
  className,
  name
}) => {
  return (
    <div className={cn('col col-12', styles.poster, className)}>
      <div className={cn('no-padding', styles.thumb)}>
        <a href="#">
          <img src={avatar} alt="avatar" className={cn('img-circle avatar-image--smaller', styles.img)} />
        </a>
      </div>
      <div className={cn('no-padding', styles.user)}>
        <span className={styles.name}><a href="#">{name}</a></span>
        <span className={styles.time}>13 minutes ago</span>
      </div>
    </div>
  );
}

Poster.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Poster
