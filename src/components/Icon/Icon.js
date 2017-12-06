import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Icon.scss'

export const Icon = ({ className, icon, color, size }) => {

  let stylesInline = {
    fontSize: size,
    color: color,
  }

  return (
    <span className={cn(icon, styles.Icon, className)} style={{...stylesInline}} />
  );
}

Icon.propTypes = {

}

export default Icon
