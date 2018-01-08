import React from 'react'
import Button from 'components/Button'
import Text from 'components/Text'

import { refundsData } from 'fixtures/refunds'
import { issuessData } from 'fixtures/issuess'

// Components loader
import { asyncComponent } from 'shared/Async'
const IssueRefund = asyncComponent({
  resolve: () => new Promise(resolve =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('modules/IssueRefund'));
      },
      'Modules-IssueRefund'
    )
  )
})

class Home extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
      hasError: false,
      modal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  handleOpenModal() {
    this.setState((prevState) => {
      return {
        modal: !prevState.modal
      }
    })
  }

  render() {
    const { modal } = this.state
    const issueRefundModalProps = {
      fluid: true,
      isOpen: modal,
      name: 'Issue Refund',
      handleCloseModal: this.handleOpenModal,
    }

    const issueRefundProps = {
      issuessData,
      basicTable: {
        columns: ['Transaction ID', 'Amount', 'Purchased by', 'Purchased date', 'Paid by'],
        data: refundsData[0],
      }
    }

    return (
      <div>
        <div style={{ width: 200, margin: '50px auto' }}>
          <Button type="primary" onClick={this.handleOpenModal}>
            <Text span>Open Issue Refund</Text>
          </Button>
        </div>
        {(modal) &&
          <IssueRefund {...issueRefundProps} modal={issueRefundModalProps} />
        }
      </div>
    );
  }

}

export default Home
