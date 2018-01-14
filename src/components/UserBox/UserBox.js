import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Icon from 'components/Icon'
import styles from './UserBox.scss'
import moment from 'moment'
import tawan from 'assets/images/tawan.jpg'

export const UserBox = ({
  thumbnail,
  photo,
  username,
  fontColor,
  showTime,
  showMore,
  showUsername,
}) => {
  const times = moment().format('YYYY-MM-DD')
  const fontColorMapper = {
    default: null,
    white: 'text-light',
  }

  return (
    <div className={cn('d-flex justify-content-start', styles.userbox)}>
      <div className={styles.photo}>
        <img
          alt="User"
          className={cn('rounded-circle', {
            'img-thumbnail': thumbnail,
          })}
          src={photo}
        />
      </div>
      {showUsername &&
      <div className="col d-flex align-items-center justify-content-between pl-2 pr-0">
        <div className={styles.user}>
          <h6 className="m-0">
            <a
              href="/"
              className={cn('font-weight-bold', fontColorMapper[fontColor])}
            >
              {username}
            </a>
          </h6>
          {(showTime) && <span className="text-muted small">{`${times}`}</span>}
        </div>
        {(showMore) &&
          <div className={styles.more}>
            <Icon icon="ion-more" color={fontColor} />
          </div>
        }
      </div>
      }
    </div>
  )
}

UserBox.propTypes = {
  photo: PropTypes.string,
  thumbnail: PropTypes.bool,
  username: PropTypes.string,
  fontColor: PropTypes.string,
  showTime: PropTypes.bool,
  showMore: PropTypes.bool,
  showUsername: PropTypes.bool,
}

UserBox.defaultProps = {
  photo: tawan,
  thumbnail: true,
  username: 'Tawan',
  fontColor: 'default',
  showTime: true,
  showMore: true,
  showUsername: true,
}

export default UserBox
