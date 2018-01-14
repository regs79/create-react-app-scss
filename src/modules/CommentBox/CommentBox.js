/* eslint-disable */
import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

// Components
import UserBox from 'components/UserBox'
import TextArea from 'components/TextArea'

import styles from './CommentBox.scss'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  render() {
    const {
      className
    } = this.props

    return (
      <div className={cn('d-flex align-items-start flex-column', className)}>
        <div className="mb-auto pt-2 pl-2 pr-2 w-100">
          <div className="form-group mb-0">
            <TextArea
              className="form-control"
              placeholder="แสดงความคิดเห็น"
              useCacheForDOMMeasurements
              value={this.state.value}
              onChange={e => this.setState({value: e.target.value})}
              />
            </div>
        </div>
        <div className="d-flex w-100">
          <div className="pl-2 pt-1">
            <UserBox
              showTime={false}
              showMore={false}
            />
          </div>
          <div className="ml-auto p-2">
            <button type="button" className="btn btn-sm btn-primary">Comment</button>
          </div>
        </div>
      </div>
    )
  }
}

CommentBox.propTypes = {
};

CommentBox.defaultProps = {
};

export default CommentBox
