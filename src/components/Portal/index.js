/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

const divRoot = document.getElementById('nav')

class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    divRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    divRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(
      children,
      this.el,
    )
  }
}

export default Portal
