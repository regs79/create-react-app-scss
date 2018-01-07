import React from 'react'
import PropTypes from 'prop-types'
// import cn from 'classnames'
// import styles from './PageHeadline.scss'
import { Link } from 'react-router-dom'
import Icon from 'components/Icon'

const PageHeadline = ({
  title,
  showHelp,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <Link className="btn btn-link" role="button" to="/">
          <Icon
            icon="ion-android-arrow-back"
            label="Go Back"
            size={32}
          />
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <h4 className="m-0 text-center">{title}</h4>
      </div>
      {(showHelp) &&
        <div className="d-flex align-items-center">
          <Link className="btn btn-link" role="button" to="/">
            <Icon
              icon="ion-help-circled"
              label="Help?"
              size={32}
            />
          </Link>
        </div>
      }
    </div>
  )
}

PageHeadline.propTypes = {
  title: PropTypes.string,
  showHelp: PropTypes.bool,
}

PageHeadline.defaultProps = {
  title: null,
  showHelp: true,
}

export default PageHeadline
