import React from 'react'
import ReactDOM from 'react-dom'

// These two containers are siblings in the DOM
const modalRoot = document.getElementById('modal')

function CreatePortal(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.el = document.createElement('div')
    }

    componentDidMount() {
      modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
      modalRoot.removeChild(this.el)
    }

    render() {
      console.log('modalRoot', modalRoot)
      return ReactDOM.createPortal(
        <WrappedComponent {...this.props} />,
        this.el,
      )
    }
  }
}

export default CreatePortal
