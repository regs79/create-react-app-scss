import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './FloatingButton.scss'
import Icon from 'components/Icon'

export const FloatingButton = ({
  handleFloatingOnClick,
  id,
}) => {
  const handleOnClose = () => {
    handleFloatingOnClick(id)
  }

  return (
    <button
      className={cn('btn btn-link m-0 p-0', styles.floatingbutton)}
      onClick={handleOnClose}
      type="button"
    >
      <Icon
        className={styles.icon}
        icon="ion-android-add-circle"
        size={50}
      />
    </button>
  )
}

FloatingButton.propTypes = {
  handleFloatingOnClick: PropTypes.func,
  id: PropTypes.string.isRequired,
}

FloatingButton.defaultProps = {
  handleFloatingOnClick: null,
}

export default FloatingButton
