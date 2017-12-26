import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './SaveTo.scss'
import Icon from 'components/Icon'

class SaveTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave() {
    this.setState((prevState) => {
      return {
        saved: !prevState.saved,
      }
    })
  }

  render() {
    const { className } = this.props

    return (
      <button className={cn('btn btn-link nopadding', styles.saveto, className)} onClick={this.handleSave}>
        <Icon icon="ion-ios-download-outline" size={32} className={cn(styles.saveIcon, {
          [styles.saved]: this.state.saved,
        })} />
      </button>
    )
  }
}

SaveTo.propTypes = {
};

SaveTo.defaultProps = {
};

export default SaveTo
