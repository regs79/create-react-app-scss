import React from 'react'
import cn from 'classnames'
import styles from './Icon.scss'

export const Icon = (props) => {
  const {
    icon,
    className,
    size,
  } = props
  console.log('size', size)
  const iconProps = {
    style: {
      fontSize: size,
    },
    className: cn(icon, styles.icon, className),
  }
  return React.createElement('span', iconProps)
}

export default Icon
