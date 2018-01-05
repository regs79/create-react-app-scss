import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Box.scss'

import { Link } from 'react-router-dom'

export const Box = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <Link className={cn(styles.box, 'p-3 text-center text-dark')} to="/">
      <div className="col">
        <img
          alt="Icon"
          className="img-fluid"
          src={image}
          style={{
            height: 150,
          }}
        />
      </div>
      <div className="col mt-3">
        <h3>{title}</h3>
      </div>
      <div className="col">
        <p className="text-muted">{subtitle}</p>
      </div>
    </Link>
  )
}

Box.propTypes = {
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

Box.defaultProps = {
  image: null,
  subtitle: null,
  title: null,
}

export default Box
