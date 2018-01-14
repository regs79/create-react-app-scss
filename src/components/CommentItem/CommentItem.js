import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './CommentItem.scss'
import avatar from 'assets/images/user.png'
// import Icon from 'components/Icon'

export const CommentItem = () => {
  return (
    <div className={cn('p-2 d-flex justify-content-start', styles.commentItem)}>
      <div className={styles.photo}>
        <img src={avatar} alt="User" className="img-thumbnail rounded-circle" />
      </div>
      <div className="d-flex align-items-start">
        <div className="ml-2">
          <h6 className="m-0 d-inline pr-2">
            <a href="/" className="font-weight-bold">{faker.internet.userName()}</a>
          </h6>
          <p className="d-inline">{faker.lorem.sentence()}</p>
          <div className="d-flex">
            <ul className="list-inline mb-0">
              <li className={cn('list-inline-item', styles.listitem)}>
                <a href="/">Like</a>
              </li>
              <li className={cn('list-inline-item', styles.listitem)}>
                <span className="text-muted">1 นาทีที่แล้ว</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

CommentItem.propTypes = {
}

CommentItem.defaultProps = {
}

export default CommentItem
