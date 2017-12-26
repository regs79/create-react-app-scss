import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './LeadTitle.scss'

export const LeadTitle = ({
  lead,
  sublead,
  link
}) => {
  return (
    <div className={styles.lead}>
      <h3 className="color-secondary font-weight-light">
        {lead}
      </h3>
      <div className="row justify-content-between">
        <div className="col-9">
          <h6 className="text-muted">{sublead}</h6>
        </div>
        {(link) &&
          <div className="col-3 text-right">
            <span className={styles.seeall}>
              <Link to={link} className="color-secondary font-weight-light">ดูทั้งหมด</Link>
            </span>
          </div>
        }
      </div>
    </div>
  )
}

LeadTitle.propTypes = {
  lead: PropTypes.string,
  sublead: PropTypes.string,
  link: PropTypes.string,
};

LeadTitle.defaultProps = {
  lead: null,
  sublead: null,
  link: null,
};

export default LeadTitle
