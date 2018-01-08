import React from 'react'
import ReactDOM from 'react-dom'
import IssueRefund from './IssueRefund'

const divRoot = document.getElementById('issue-refund');

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
      <IssueRefund {...this.props} />,
      this.el,
    );
  }
}
