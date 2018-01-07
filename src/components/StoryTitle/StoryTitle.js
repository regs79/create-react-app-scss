import React from 'react'
import PropTypes from 'prop-types'
// import cn from 'classnames'
import styles from './StoryTitle.scss'

export const StoryTitle = ({
  title,
}) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
    </div>
  )
}

StoryTitle.propTypes = {
  title: PropTypes.string,
}

StoryTitle.defaultProps = {
  title: null,
}

export default StoryTitle
