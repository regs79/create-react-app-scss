import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './LikeBox.scss'

export const LikeBox = () => {
  return (
    <div className={cn('d-flex justify-content-start p-2', styles.likebox)}>
      <ul className="list-inline m-0">
        <li className="list-inline-item">
          <a href="">
            <i className="icon ion-chatbubbles" />
            <span className="pl-2">13 ความคิดเห็น</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

LikeBox.propTypes = {
}

LikeBox.defaultProps = {
}

export default LikeBox
