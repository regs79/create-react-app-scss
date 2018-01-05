import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Icon.scss'

export const Icon = ({
  icon,
  label,
  size,
}) => {
  const iconProps = {
    className: cn('fa', icon, styles.icon),
    style: {
      fontSize: size,
    },
  }
  const labels = () => {
    if (label === null) {
      return null
    }

    const spanProps = {
      className: cn('pl-2', styles.label),
      style: {
        bottom: size / 5,
      },
    }

    return React.createElement('span', spanProps, label)
  }
  return React.createElement('i', iconProps, labels())
}

Icon.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
}

Icon.defaultProps = {
  icon: null,
  label: null,
  size: 16,
}

export default Icon
