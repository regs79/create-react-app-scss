import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ReactModal from 'react-modal'
import Button from 'components/Button'
import Text from 'components/Text'

import styles from './Modal.scss'

export const Modal = ({
  name,
  children,
  isOpen,
  handleCloseModal,
  fluid,
}) => {
  const modalProps = {
    ariaHideApp: false,
    isOpen: isOpen,
    contentLabel: name,
    className: styles.modalContainer,
  }

  const closeButtonprops = {
    type: 'button',
    className: 'close',
    onClick: handleCloseModal,
  }

  const modalHTmlprops = {
    className: 'modal',
    style: {
      display: 'block',
    },
    tabIndex: -1,
    role: 'dialog',
  }

  const modalContentProps = {
    role: 'document',
    className: cn('modal-dialog', {
      [styles.modalFluid]: fluid,
    }),
  }

  return (
    <ReactModal {...modalProps}>
      <div {...modalHTmlprops}>
        <div {...modalContentProps}>
          <div className="modal-content">
            <div className="modal-header">
              <Text h5 className="modal-title">{name}</Text>
              <button {...closeButtonprops}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {React.createElement('div', { className: 'modal-body', children })}
            <div className="modal-footer">
              <Button onClick={handleCloseModal}>
                <Text span>Cancel</Text>
              </Button>
              <Button type="primary">
                <Text span>Next</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  fluid: PropTypes.bool,
};

Modal.defaultProps = {
  name: 'Modal',
  children: null,
  isOpen: false,
  handleCloseModal: null,
  fluid: false,
};

export default Modal
