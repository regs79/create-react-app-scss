import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Icon.scss'
import MediaQuery from 'components/MediaQuery'

export const Icon = ({
  className,
  color,
  icon,
  label,
  size,
}) => {
  const iconProps = {
    className: cn('fa', icon, styles.icon, className, {
      'd-flex align-items-center': label !== null,
    }),
    style: {
      color,
      fontSize: size,
    },
  }
  const labels = () => {
    if (label === null) {
      return null
    }

    const spanProps = {
      className: cn('pl-2', styles.label),
    }

    return <MediaQuery up="md" className="d-flex align-items-center">{React.createElement('span', spanProps, label)}</MediaQuery>
  }
  return React.createElement('i', iconProps, labels())
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
}

Icon.defaultProps = {
  className: null,
  color: null,
  icon: null,
  label: null,
  size: 16,
}

export default Icon
