import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Button.scss'

import Spinner from 'assets/svg/Spinner.svg'

const Button = ({
  disabled,
  children,
  className,
  type,
  onClick,
  isLoading,
}) => {
  const buttonProps = {
    onClick: (!disabled) && onClick,
    disabled,
    className: cn(styles.btn, styles[type], className, {
      [styles.spinner]: isLoading === true,
    }),
  }

  const svgProps = {
    src: Spinner,
    className: styles.spinnerIcon,
  }

  const label = (isLoading) ? <img {...svgProps} alt="Loading" /> : children
  return React.createElement('button', buttonProps, label)
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'dark',
  ]),
}

Button.defaultProps = {
  className: null,
  disabled: false,
  isLoading: false,
  type: 'primary',
  onClick: null,
}

export default Button
