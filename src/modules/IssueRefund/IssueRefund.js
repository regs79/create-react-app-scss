import React from 'react'
import PropTypes from 'prop-types'
import styles from './IssueRefund.scss'
import cn from 'classnames'
import { REFUND_TYPES, CANCEL_TYPES } from 'constants/refunds'
import { dropdownLists } from 'utils/dropdown'
import findIndex from 'lodash/findIndex'
import Modal from 'components/Modal'
// Components
import AlertMessage from 'components/AlertMessage'
import BasicTable from 'components/BasicTable'
import Text from 'components/Text'
import Checkbox from 'components/Checkbox'
import Dropdown from 'components/Dropdown'
import InputLight from 'components/InputLight'

class IssueRefund extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
      data: [],
    };
    this.handleOnClickRefundAmount = this.handleOnClickRefundAmount.bind(this)
    this.handleOnClickCancelMembership = this.handleOnClickCancelMembership.bind(this)
    this.handleCheckboxOnClick = this.handleCheckboxOnClick.bind(this)
  }

  componentWillMount() {
    const issuessData = this.props.issuessData.map((issues) => {
      return Object.assign({}, issues, {
        isChecked: false,
        isRefunded: false,
        isCancel: false,
      })
    })

    this.setState({
      data: issuessData,
    })
  }

  handleOnClickRefundAmount(item) {
    const { data: { id }, value: { value } } = item
    this.setState((prevState) => {
      const prevStateData = prevState.data
      const foundedData = prevStateData.filter((data) => data.id === id).reduce(d => d)
      const index = findIndex(prevStateData, foundedData)
      const updatedData = Object.assign({}, foundedData, {
        isRefunded: REFUND_TYPES[value],
      })
      const newState = Object.assign({}, prevStateData, {
        [index]: updatedData,
      })
      return {
        data: Object.keys(newState).map((k) => newState[k]),
      }
    })
  }

  handleOnClickCancelMembership(item) {
    const { data: { id }, value: { value } } = item
    this.setState((prevState) => {
      const prevStateData = prevState.data
      const foundedData = prevStateData.filter((data) => data.id === id).reduce(d => d)
      const index = findIndex(prevStateData, foundedData)
      const updatedData = Object.assign({}, foundedData, {
        isCancel: CANCEL_TYPES[value],
      })
      const newState = Object.assign({}, prevStateData, {
        [index]: updatedData,
      })
      return {
        data: Object.keys(newState).map((k) => newState[k]),
      }
    })
  }

  handleCheckboxOnClick(id) {
    this.setState((prevState) => {
      const prevStateData = prevState.data
      const foundedData = prevStateData.filter((data) => data.id === id).reduce(d => d)
      const index = findIndex(prevStateData, foundedData)
      const updatedData = Object.assign({}, foundedData, {
        isChecked: !foundedData.isChecked,
      })
      const newState = Object.assign({}, prevStateData, {
        [index]: updatedData,
      })
      return {
        data: Object.keys(newState).map((k) => newState[k]),
      }
    })
  }

  dropdownRefundContent(types) {
    const dropdown = []
    for (var i = 0; i < types.length; i++) {
      const lists = dropdownLists({
        label: REFUND_TYPES[types[i]],
        value: types[i]
      })
      dropdown.push(lists)
    }
    return dropdown
  }

  dropdownCancelMembershipContent(types) {
    const dropdown = []
    for (var i = 0; i < types.length; i++) {
      const lists = dropdownLists({
        label: CANCEL_TYPES[types[i]],
        value: types[i]
      })
      dropdown.push(lists)
    }
    return dropdown
  }

  render() {
    const {
      modal,
      basicTable,
    } = this.props

    const { data } = this.state

    // Alert message
    const alertMessageProps = {
      title: 'Please Note',
      type: 'info',
      content:
      `
      <p>Refunds made after X days can only be made from the organisation processing the refunds account. if you want other organisations to participate in the refund, you are responsible for coordinating with those other organizations.</p>
      <p>Refunds can only be processed against the credit card from which the original payment was made</p>
      `
    }

    // General information on table
    const BasicTableProps = {
      columns: basicTable.columns,
      data: basicTable.data,
    }

    const normalInputProps = {
      type: 'text',
      className: cn('form-control', styles.input),
    }

    return (
      <Modal {...modal}>
        <div className={styles.container}>
          <AlertMessage {...alertMessageProps} />
          <BasicTable {...BasicTableProps} />
          <Text h1>Please select items to refund</Text>
          <table className="table">
            <thead className={styles.tableHead}>
              <tr>
                <th scope="col" style={{ width: 250 }}>ITEMS</th>
                <th scope="col" style={{ width: 100 }}>PRICE</th>
                <th scope="col" style={{ width: 250 }}>REFUND AMOUNT</th>
                <th scope="col">CANCEL MEMBERSHIP</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((issues, key) => {
                  const isDisabled = issues.disabled
                  const disabledMsg = issues.disabledMsg
                  const refundAmountDropdownProps = {
                    data: issues,
                    options: this.dropdownRefundContent(issues.refundTypes),
                    handleOnClick: this.handleOnClickRefundAmount,
                  }
                  const cancelMembershipDropdownProps = {
                    data: issues,
                    options: this.dropdownCancelMembershipContent(issues.cancelTypes),
                    handleOnClick: this.handleOnClickCancelMembership,
                  }

                  const checkboxProps = {
                    id: issues.id,
                    isChecked: issues.isChecked === true,
                    label: issues.name,
                    onClick: (!isDisabled) ? this.handleCheckboxOnClick : null,
                  }

                  const partialInputProps = Object.assign({}, normalInputProps, {
                    id: issues.id,
                    value: 0,
                    placeholder: '',
                    style: {
                      width: 70,
                    }
                  })

                  const isPartialSelected = (issues.isRefunded === REFUND_TYPES.partial)

                  return (
                    <tr key={key} id={issues.id} className={cn({ [styles.disabled]: isDisabled })}>
                      <th scope="row">
                        <Checkbox {...checkboxProps} />
                      </th>
                      <td><Text span>{issues.amount}</Text></td>
                      {(isDisabled) &&
                        <td colSpan={2}>
                          <Text span>{disabledMsg}</Text>
                        </td>
                      }
                      {(!isDisabled) &&
                        <td>
                          <Dropdown {...refundAmountDropdownProps} />
                          {(isPartialSelected) && <InputLight {...partialInputProps} />}
                        </td>
                      }
                      {(!isDisabled) &&
                        <td>
                          <Dropdown {...cancelMembershipDropdownProps} />
                        </td>
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div style={{ display: 'block' }}>
            <Text span>Refund reason</Text>
            <div>
              <InputLight placeholder="Comment" />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

IssueRefund.propTypes = {
  BasicTable: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.object
  }),
}

IssueRefund.defaultProps = {
  BasicTable: {
    columns: [],
    data: {},
  }
}

export default IssueRefund
