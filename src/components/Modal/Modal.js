import React from 'react'
import PropTypes from 'prop-types'
// import cn from 'classnames'
import styles from './Modal.scss'
import ReactModal from 'react-modal'

class Modal extends React.Component {
  render() {
    const {
      isOpen,
      children,
    } = this.props

    return (
      <ReactModal
        isOpen={isOpen} // eslint-disable-line
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Modal"
      >
        {children}
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

Modal.defaultProps = {
}

export default Modal
