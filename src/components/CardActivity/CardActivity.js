import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
// import styles from './CardActivity.scss'

import { Link } from 'react-router-dom'

const CardActivity = () => {
  return (
    <div className="row no-gutters mb-4">
      <div className={cn({
        'col-2': false,
        'col-1': true,
      })}
      >
        <img
          className="img-thumbnail"
          src={faker.image.imageUrl()}
          alt="Generic placeholder"
        />
      </div>
      <div className="col">
        <div className="row no-gutters">
          <div className="col-12 pl-3">
            <h5>
              <Link to={`/stories/${faker.random.number()}`}>
                {faker.lorem.sentence()}
              </Link>
            </h5>
          </div>
          <div className="col-12 pl-3">
            <ul className="list-inline m-0">
              <li className="list-inline-item">231 views</li>
              <li className="list-inline-item">27</li>
              <li className="list-inline-item">4</li>
              <li className="list-inline-item">Tawan</li>
              <li className="list-inline-item">Thursday</li>
            </ul>
          </div>
          <div className="col-12 pl-3">
            <ul className="list-inline m-0">
              <li className="list-inline-item"><span className="badge badge-pill badge-primary">Primary</span></li>
              <li className="list-inline-item"><span className="badge badge-pill badge-secondary">Secondary</span></li>
              <li className="list-inline-item"><span className="badge badge-pill badge-warning">Warning</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

CardActivity.propTypes = {
}

CardActivity.defaultProps = {
}

export default CardActivity
