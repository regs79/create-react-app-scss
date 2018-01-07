import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './StoryBox.scss'

export const StoryBox = ({
  children,
}) => {
  return (
    <div className={cn('col mb-3 p-2', styles.storybox)}>
      {children}
    </div>
  )
}

StoryBox.propTypes = {
  children: PropTypes.node.isRequired,
}

StoryBox.defaultProps = {
}

export default StoryBox
