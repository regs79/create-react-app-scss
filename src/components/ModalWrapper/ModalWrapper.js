import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Icon from 'components/Icon'
import styles from './ModalWrapper.scss'

export const ModalWrapper = ({
  children,
  handleOnClose,
  title,
}) => {
  return (
    <div className={styles.modalwrapper}>
      <nav className={styles.nav}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center pl-2">
            <Icon icon="ion-android-create" size={24} color="white" />
            <span className="pl-2 text-light">{title}</span>
          </div>
          <div className="pr-1">
            <button type="button" className="btn btn-primary btn-sm" onClick={handleOnClose}>
              <Icon icon="ion-android-close" size={24} />
            </button>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
      <footer className={cn('d-flex justify-content-between', styles.footer)}>
        <div className="d-flex align-items-center pl-2">
          <Icon icon="ion-android-drafts" size={24} />
          <span className="px-2">บันทึก</span>
        </div>
        <div className="px-2">
          <button type="button" className="btn btn-link btn-sm py-0">
            <Icon icon="ion-android-more-horizontal" size={24} />
          </button>
          <button type="button" className="btn btn-link btn-sm py-0">
            <Icon icon="ion-android-arrow-up" size={24} />
          </button>
        </div>
      </footer>
    </div>
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  handleOnClose: PropTypes.func,
  title: PropTypes.string,
}

ModalWrapper.defaultProps = {
  handleOnClose: null,
  title: null,
}

export default ModalWrapper
