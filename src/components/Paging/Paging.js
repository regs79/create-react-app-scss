import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Paging.scss'
import MediaQuery from 'components/MediaQuery'

export const Paging = ({
  isBottomFixed,
  isOpen,
}) => {
  return (
    <nav aria-label="pagination" className={cn(styles.pagination, { [styles.closed]: !isOpen })}>
      <ul className={cn('pagination justify-content-center mt-md-3', styles.paging, {
          [styles.mobile]: isBottomFixed,
        })}
      >
        <li className={cn('page-item disabled', styles.pageitem)}>
          <a className={cn('page-link', styles.pagelink)} href="/" tabIndex="-1">
            <MediaQuery up="md">
              <span>หน้าที่แล้ว</span>
            </MediaQuery>
            <MediaQuery down="sm" component="i">
              <i
                className="icon ion-arrow-left-c"
                style={{
                  fontSize: 24,
                  position: 'absolute',
                  left: 0,
                  top: 1,
                }}
              />
            </MediaQuery>
          </a>
        </li>
        <li className={cn('page-item', styles.pageitem)}><a className={cn('page-link', styles.pagelink)} href="/">1</a></li>
        <li className={cn('page-item active', styles.pageitem)}>
          <a className={cn('page-link', styles.pagelink)} href="/">2 <span className="sr-only">(current)</span></a>
        </li>
        <li className={cn('page-item', styles.pageitem)}><a className={cn('page-link', styles.pagelink)} href="/">3</a></li>
        <li className={cn('page-item', styles.pageitem)}>
          <a className={cn('page-link', styles.pagelink)} href="/">
            <MediaQuery up="md">
              <span>หน้าถัดไป</span>
            </MediaQuery>
            <MediaQuery down="sm" component="i">
              <i
                className="icon ion-arrow-right-c"
                style={{
                  fontSize: 24,
                  position: 'absolute',
                  right: 0,
                  top: 1,
                }}
              />
            </MediaQuery>
          </a>
        </li>
      </ul>
    </nav>
  )
}

Paging.propTypes = {
  isBottomFixed: PropTypes.bool,
  isOpen: PropTypes.bool,
}

Paging.defaultProps = {
  isBottomFixed: false,
  isOpen: true,
}

export default Paging
