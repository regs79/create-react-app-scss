import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Checkbox.scss'

export const Checkbox = ({
  className,
  id,
  isChecked,
  label,
  onClick,
}) => {

  const inputProps = {
    id: id,
    type: 'checkbox',
    readOnly: true,
    checked: isChecked,
    className: cn({
      [styles.checked]: isChecked,
      [styles.opening]: false,
    }),
  }
  const labelProps = {
    onClick: (onClick) && onClick.bind(this, id),
    htmlFor: id,
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        {React.createElement('input', inputProps)}
        {
          React.createElement('label', labelProps,
          React.createElement('div', { className: styles.labelWrapper },
          React.createElement('span', { className: styles.name }, label)))
        }
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

Checkbox.defaultProps = {
  className: null,
  id: null,
  isChecked: false,
  label: null,
  onClick: null,
}

export default Checkbox
