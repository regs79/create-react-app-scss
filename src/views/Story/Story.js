/* eslint-disable */
import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import Icon from 'components/Icon'
import cn from 'classnames'
import CardStory from 'components/CardStory'
import StoryBox from 'components/StoryBox'
import StoryTitle from 'components/StoryTitle'
import Paging from 'components/Paging'
import MediaQuery from 'components/MediaQuery'
import FloatingButton from 'components/FloatingButton'
import EditorWrapper from 'components/EditorWrapper'
import Modal from 'components/Modal'
import ModalWrapper from 'components/ModalWrapper'
import Portal from 'components/Portal'
import FeatureImage from 'components/FeatureImage'
import CommentItem from 'components/CommentItem'
import LikeBox from 'components/LikeBox'
import UserBox from 'components/UserBox'
import times from 'lodash/times'

// modules
import CommentBox from 'modules/CommentBox'

import styles from './Story.scss'

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: {
        editor: false,
      },
    }
    this.handleModal = this.handleModal.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.modal.editor !== this.state.modal.editor) {
      return true
    }

    if (nextState.isShowPaging !== this.state.isShowPaging) {
      return true
    }

    return false
  }

  handleModal(modalId) {
    this.setState((prevState) => {
      return {
        modal: {
          [modalId]: !prevState.modal[modalId],
        },
      }
    })
  }

  render() {
    const {
      modal,
      isShowPaging,
    } = this.state

    return (
      <div>
        <div className={styles.storyview}>
          <div className="container">
            <MediaQuery up="lg" component="nav">
              <ol className="breadcrumb pl-0 m-0">
                <li className="breadcrumb-item"><Link to="/" className="text-muted">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/" className="text-muted">Travel</Link></li>
              </ol>
            </MediaQuery>
            <div className="row">
              <div className="col-12">
                <MediaQuery down="md">
                  <Paging
                    isBottomFixed={true}
                  />
                </MediaQuery>
                <MediaQuery up="lg">
                  <Paging />
                </MediaQuery>
              </div>
              <div className="col-12 mt-3">
                <StoryTitle
                  className="bg-white py-3 px-md-4 p-3"
                  title="'บาหลีเป็นเกาะชิคๆ' เที่ยวบาหลีแบบครบ จบใน4วัน"
                />
                {
                  times(5, (key) => (
                    <div className="mb-3">
                      <div className={cn('col section-box bg-white mb-md-3 px-md-4 mb-2', {
                        'no-border-top': key === 0,
                        'py-0': key === 0,
                        'py-3': key > 0,
                      })}>
                        <div>
                          <UserBox
                          />
                        </div>
                        <div className="py-3">
                          {faker.lorem.sentences()}
                        </div>
                      </div>
                      {
                        times(3, () => (
                          <div className="col-11 offset-1 section-box bg-white mb-md-3 pt-3 px-md-4 mb-2">
                            <div>
                              <UserBox
                                photo={faker.image.avatar()}
                                username={faker.internet.userName()}
                              />
                            </div>
                            <div className="py-3">
                              {faker.lorem.sentence()}
                            </div>
                          </div>
                        ))
                      }
                      <div className="col-11 offset-1 section-box bg-white p-0">
                        <CommentBox />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Story.propTypes = {

}

export default Story
