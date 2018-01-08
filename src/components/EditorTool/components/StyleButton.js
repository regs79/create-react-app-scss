/* eslint-disable */
import React from 'react'
import cn from 'classnames'
import styles from '../EditorTool.scss'

export default class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    const { label } = this.props
    let stylesClasses = cn('col text-center', {
      [styles.active]: this.props.active,
      'bg-primary text-light': this.props.active,
    })
    const styleButtonProps = {
      className: stylesClasses,
      onMouseDown: this.onToggle,
    }

    return React.createElement('span', styleButtonProps, label)
  }
}
