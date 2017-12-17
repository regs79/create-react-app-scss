import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Dropdown.scss'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      selected: null,
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentWillMount() {
    const { defaultSelected } = this.props
    this.setState({
      selected: defaultSelected,
    })
  }

  onClick(selected) {
    this.setState({
      selected: selected.value.label,
    }, () => this.props.handleOnClick(selected))
    this.handleShow()
  }

  handleOutsideClick(e) {
    if (this.elm.contains(e.target)) {
      return;
    }

    this.handleShow();
  }

  handleShow() {
    if (!this.state.isShow) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState((prevState) => {
      return {
        isShow: !prevState.isShow,
      }
    })
  }

  render() {
    const {
      type,
      data,
      options,
    } = this.props
    const { selected } = this.state
    const dropdownContentClasses = cn('dropdown-menu', styles.dropdownContainer, {
      [styles.show]: this.state.isShow,
    })

    const btnClasses = cn('btn dropdown-toggle', styles.btn, styles[type])

    const btnProps = {
      className: btnClasses,
      onClick: this.handleShow,
    }

    return (
      <div className="btn-group" ref={elm => { this.elm = elm; }}>
        {React.createElement('button', btnProps, selected)}
        <div className={dropdownContentClasses}>
          {(options) && options.map((option, key) =>
            React.createElement('a', {
              key,
              className: cn('dropdown-item', styles.dropdownItem),
              onClick: this.onClick.bind(this, { data, value: option }),
            }, option.label)
          )}
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  defaultSelected: PropTypes.string,
  type: PropTypes.oneOf(['default', 'success']),
  handleOnClick: PropTypes.func,
  options: PropTypes.array,
}

Dropdown.defaultProps = {
  defaultSelected: 'Please select',
  type: 'default',
  options: [],
  handleOnClick: null,
}

export default Dropdown
