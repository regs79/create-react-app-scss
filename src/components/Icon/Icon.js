import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
// import styles from './Icon.scss'

export const Icon = ({
  icon,
  size,
}) => {
  const iconProps = {
    className: cn('fa', icon),
    style: {
      fontSize: size,
    },
  }

  return React.createElement('i', iconProps)
}

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
}

Icon.defaultProps = {
  icon: null,
  size: 16,
}

export default Icon
