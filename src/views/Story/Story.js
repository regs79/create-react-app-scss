/* eslint-disable */
// import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import Icon from 'components/Icon'
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
// import Section from 'components/Section'
// import times from 'lodash/times'

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
      <div className="pt-9">
        <div className="container">
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0 m-0">
              <li className="breadcrumb-item"><Link to="/" className="text-muted">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/" className="text-muted">Travel</Link></li>
            </ol>
          </nav> */}
          <MediaQuery down="md">
            <Paging
              isBottomFixed={true}
            />
          </MediaQuery>
          <MediaQuery up="lg">
            <Paging />
          </MediaQuery>
          <div className="row min-height-vh-75">
            <div className="col-12 no-padding-sm">
              <div className="d-flex no-padding-md">
                <StoryTitle
                  title="'บาหลีเป็นเกาะชิคๆ' เที่ยวบาหลีแบบครบ จบใน4วัน"
                />
              </div>
              <StoryBox>
                <CardStory />
              </StoryBox>
              <StoryBox>
                <CardStory />
              </StoryBox>
              <StoryBox>
                <CardStory />
              </StoryBox>
            </div>
          </div>
        </div>
        <MediaQuery down="md">
          <FloatingButton
            id="editor"
            handleFloatingOnClick={this.handleModal} // eslint-disable-line
          />
          <Modal isOpen={modal.editor}>
            <ModalWrapper
              title="เพิ่มเนื้อหาใหม่"
              handleOnClose={this.handleModal.bind(this, 'editor')} // eslint-disable-line
            >
              <EditorWrapper
                handleOnClose={this.handleModal.bind(this, 'editor')} // eslint-disable-line
              />
            </ModalWrapper>
          </Modal>
        </MediaQuery>
      </div>
    )
  }
}

Story.propTypes = {

}

export default Story
