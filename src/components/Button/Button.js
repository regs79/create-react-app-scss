import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Button.scss'

export const Button = ({
  children,
  className,
  ...rest,
}) => {
  const btnClassMapper = {
    darkpink: 'btn-darkpink',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    link: 'btn-link',
  }

  const btnClassSizes = {
    medium: 'btn-medium',
    full: 'btn-block',
    small: 'btn-sm'
  }
  const allClasses = []

  for (var key in rest) {
    if (rest.hasOwnProperty(key)) {
      allClasses.push(btnClassMapper[key])
      allClasses.push(btnClassSizes[key])
    }
  }

  return React.createElement('button', { className: cn('btn', styles.btn, allClasses, className)}, children)
}

Button.propTypes = {
  className: PropTypes.string,
}

Button.propTypes = {
  className: null,
}

export default Button
