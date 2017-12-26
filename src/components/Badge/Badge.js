import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'react-router-dom'

export const Badge = ({
  title,
  type,
  link,
}) => {
  const badgeTypes = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
  }
  const badgeProps = {
    className: cn('badge badge-pill mr-1', badgeTypes[type])
  }
  const links = (<Link to={link} className="text-light">{title}</Link>)
  return React.createElement('span', badgeProps, links)
}

Badge.propTypes = {
};

Badge.defaultProps = {
};

export default Badge
