import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.scss'
import cn from 'classnames'

export const Text = ({ children, ...rest }) => {
  for (var type in rest) {
    if (rest.hasOwnProperty(type)) {
      if (rest[type] === true) {
        const textProps = {
          className: cn(styles[type], rest.className),
        }
        return React.createElement(type, textProps, children)
      }
    }
    return React.createElement('p', { className: cn(styles['p']) }, children)
  }
}

Text.propTypes = {
  span: PropTypes.bool,
  h1: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Text.defaultProps = {
  span: false,
  h1: false,
  children: 'Empty Text',
  className: null,
}

export default Text
