import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Button.scss'

export const Button = ({
  children,
  ...rest,
}) => {
  let btnProps = {}
  const btnClassMapper = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    link: 'button-link',
  }

  const btnClassSizes = {
    medium: 'btn-medium'
  }
  const allClasses = []

  for (var key in rest) {
    if (rest.hasOwnProperty(key)) {
      allClasses.push(btnClassMapper[key])
      allClasses.push(btnClassSizes[key])
    }
  }

  return React.createElement('button', { className: cn('button', styles.btn, allClasses)}, children)
}

Button.propTypes = {
  // children: PropTypes.string,
}

Button.propTypes = {
  // children: 'Label',
}

export default Button
