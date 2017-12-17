import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'components/Modal'
import IssueRefund from 'views/Home/components/IssueRefund'
import Button from 'components/Button'
import Text from 'components/Text'

class Home extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
      modal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  handleOpenModal() {
    this.setState((prevState) => {
      return {
        modal: !prevState.modal
      }
    })
  }

  render() {
    const { refundsData, issuessData } = this.props
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
        columnLabel: ['Transaction ID', 'Amount', 'Purchased by', 'Purchased date', 'Paid by'],
        columnDataValue: refundsData[0],
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
          <Modal {...issueRefundModalProps}>
            <IssueRefund {...issueRefundProps} />
          </Modal>
        }
      </div>
    );
  }

}

export default Home
