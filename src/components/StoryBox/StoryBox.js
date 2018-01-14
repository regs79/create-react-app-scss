import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './StoryBox.scss'

export const StoryBox = ({
  children,
  className,
}) => {
  return (
    <div className={cn(styles.storybox, className)}>
      {children}
    </div>
  )
}

StoryBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

StoryBox.defaultProps = {
  className: null,
}

export default StoryBox
