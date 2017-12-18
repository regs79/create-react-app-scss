import './styles/reset.css'
import './assets/css/font-awesome.css'
import './assets/css/ionicons.css'
import 'normalize.css'
import './styles/base.css'
import './assets/css/bootstrap.css'

import React from 'react';
// import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import faker from 'faker'
// components
import Text from 'components/Text'
import Button from 'components/Button'
import BasicTable from 'components/BasicTable'
import AlertMessage from 'components/AlertMessage'
import Checkbox from 'components/Checkbox'
import Dropdown from 'components/Dropdown'
import InputLight from 'components/InputLight'

// views
import { refundsData } from 'fixtures/refunds'
import { issuessData } from 'fixtures/issuess'
import Home from 'views/Home'

storiesOf('Welcome', module)
  .add('Issue Refund Modal',
    withInfo(
      {
        text: 'Checkbox Component',
      })(() => {
      return (<Home issuessData={issuessData} refundsData={refundsData} />)
    })
  )

storiesOf('Text', module)
  .add('Span', withInfo({
    text: 'Text Default Component',
  })(() => {
    return (<Text span>Span Text</Text>)
  }))
  .add('H1', withInfo({
    text: 'Text Default Component',
  })(() => {
    return (<Text h1>H1 Text</Text>)
  }))

storiesOf('Button', module)
  .add('Default', withInfo({
    text: 'Button Default Component',
  })(() => {
    return (
      <Button onClick={action('clicked')}>
        <Text span>Next</Text>
      </Button>
    )
  }))
  .add('Primary', withInfo({
    text: 'Button Primary Component',
  })(() => {
    return (
      <Button type="primary" onClick={action('clicked')}>
        <Text span>Next</Text>
      </Button>
    )
  }))

storiesOf('AlertMessage', module)
  .add('Info', withInfo({
    text: 'AlertMessage Component',
  })(() => {
    const alertMessageProps = {
      title: 'Please Note',
      type: 'info',
      content: `<p>Refunds made after X days can only be made from the organisation processing the refunds account. if you want other organisations to participate in the refund, you are responsible for coordinating with those other organizations.</p><p>Refunds can only be processed against the credit card from which the original payment was made</p>`
    }
    return (
      <AlertMessage {...alertMessageProps} />
    )
  }))

  .add('Warning',
    withInfo({
      text: 'AlertMessage Component',
    })(() => {
    const alertMessageProps = {
      title: 'Warning Title',
      type: 'warning',
      content: `<p>Refunds made after X days can only be made from the organisation processing the refunds account. if you want other organisations to participate in the refund, you are responsible for coordinating with those other organizations.</p><p>Refunds can only be processed against the credit card from which the original payment was made</p>`
    }
    return (
      <AlertMessage {...alertMessageProps} />
    )
  }))


storiesOf('BasicTable', module)
  .add('BasicTable',
    withInfo(
      {
        text: 'Table Component',
      })(() => {
        const BasicTableProps = {
          columns: ['Transaction ID', 'Amount', 'Purchased by', 'Purchased date', 'Paid by'],
          data: {
            id: 92345677,
            amount: faker.commerce.price(.10,200.00,2,"$"),
            purchasedby: faker.name.firstName(),
            purchaseddate: faker.date.past(10),
            paidby: 'VISA-XXX XXX XXX 4351',
          },
        }
      return (<BasicTable {...BasicTableProps} />)
    })
  )

storiesOf('Checkbox', module)
  .add('Unchecked',
    withInfo(
      {
        text: 'Checkbox Component',
      })(() => {
      const checkboxProps = {
        id: 1234,
        isChecked: false,
        label: 'Checkbox Name',
        onClick: action('clicked'),
      }
      return (<Checkbox {...checkboxProps} />)
    })
  )
  .add('Checked',
    withInfo(
      {
        text: 'Checkbox Component',
      })(() => {
      const checkboxProps = {
        id: 1234,
        isChecked: true,
        label: 'Checkbox Name',
        onClick: action('clicked'),
      }
      return (<Checkbox {...checkboxProps} />)
    })
  )


storiesOf('Dropdown', module)
  .add('Default',
    withInfo(
      {
        text: 'Checkbox Component',
      })(() => {
      const basicDropdown = {
        data: {
          id: 1234,
          name: 'Test Item',
        },
        options: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
        ],
        handleOnClick: action('clicked'),
      }
      return (<Dropdown {...basicDropdown} />)
    })
  )

storiesOf('Input', module)
  .add('InputLight',
    withInfo(
      {
        text: 'InputLight Component',
      })(() => {
      return (<InputLight />)
    })
  )
