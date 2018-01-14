import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './StoryTitle.scss'

export const StoryTitle = ({
  title,
  className,
}) => {
  return (
    <div className={cn(styles.container, 'd-flex justify-content-between align-items-center', className)}>
      <h4 className={cn(styles.title, 'm-0')}>{title}</h4>
    </div>
  )
}

StoryTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

StoryTitle.defaultProps = {
  title: null,
  className: null,
}

export default StoryTitle
