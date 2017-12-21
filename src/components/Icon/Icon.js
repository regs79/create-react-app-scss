import React from 'react'
import cn from 'classnames'
import styles from './Icon.scss'

export const Icon = ({
  icon,
  size,
  className,
}) => {
  const iconProps = {
    style: {
      fontSize: size,
    },
    className: cn(icon, styles.icon, className),
  }
  return React.createElement('span', iconProps)
}

export default Icon
