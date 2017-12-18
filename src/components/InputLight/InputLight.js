import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './InputLight.scss'

export const InputLight = ({
  id,
  placeholder,
  value,
  ...rest,
}) => {
  const inputProps = {
    id,
    type: 'text',
    className: cn('form-control', styles.input, styles.light),
    placeholder: placeholder,
    style: { ...rest.style },
  }

  return React.createElement('input', inputProps)
}

InputLight.propTypes = {
  id: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.any,
}

InputLight.defaultProps = {
  id: 0,
  placeholder: 'Placeholder',
  value: null,
}

export default InputLight
