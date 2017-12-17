import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Button.scss'

export const Button = ({
  children,
  type,
  onClick,
}) => {
  const buttonProps = {
    type: 'button',
    className: cn('btn', styles.btn, [styles[type]]),
    onClick,
  }
  return React.createElement('button', buttonProps, children)
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: 'Button Name',
  type: 'default',
  onClick: null,
}

export default Button
