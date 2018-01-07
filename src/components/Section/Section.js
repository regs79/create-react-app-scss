import React from 'react'
import PropTypes from 'prop-types'
// import cn from 'classnames'
import styles from './Section.scss'

export const Section = ({
  children,
  leftLabel, // eslint-disable-line
  leftLink, // eslint-disable-line
  rightLabel, // eslint-disable-line
  rightLink, // eslint-disable-line
}) => {
  return (
    <div className={styles.section}>
      <div className="d-flex justify-content-between">
        <div>{leftLabel}</div>
        <div>{rightLabel}</div>
      </div>
      <div className="d-flex">
        {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  leftLabel: PropTypes.string,
  leftLink: PropTypes.string,
  rightLabel: PropTypes.string,
  rightLink: PropTypes.string,
}

Section.defaultProps = {
  leftLabel: null,
  leftLink: null,
  rightLabel: null,
  rightLink: null,
}

export default Section
