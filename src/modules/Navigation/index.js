import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'

const divRoot = document.getElementById('navigation');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    divRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    divRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <Navigation />,
      this.el,
    );
  }
}
