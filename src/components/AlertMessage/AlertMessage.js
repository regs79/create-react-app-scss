import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Text from 'components/Text'
import styles from './AlertMessage.scss'

export const AlertMessage = ({
  icon,
  title,
  content,
  type,
}) => {
  const createMarkupContent = () => {
    return { __html: content };
  }

  const iconsMaps = {
    info: 'fa fa-exclamation-circle',
    warning: 'fa fa-exclamation-triangle',
  }
  const iconsClasses = {
    className: cn(iconsMaps[type], styles.icons, styles[type]),
  }
  const textClasses = cn(styles.label, styles[type])

  return (
    <div className={cn('alert', styles.alert, styles[type])} role="alert">
      <Text h4 className={cn('alert-heading', styles.headline)}>
        {React.createElement('i', iconsClasses)}
        <Text span className={textClasses}>{title}</Text>
      </Text>
      {React.createElement('div', {
        className: styles.message,
        dangerouslySetInnerHTML: createMarkupContent()
      })}
    </div>
  );
}

AlertMessage.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
}

AlertMessage.defaultProps = {
  type: 'info',
}

export default AlertMessage
