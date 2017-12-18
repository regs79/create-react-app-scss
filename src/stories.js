import 'normalize.css'
import './styles/base.css'
import './assets/css/font-awesome.css'

import React from 'react';
// import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import faker from 'faker'
// components
import Text from 'components/Text'
import Button from 'components/Button'
import BasicTable from 'components/BasicTable'
import AlertMessage from 'components/AlertMessage'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Default', () => {
    return (
      <Button onClick={action('clicked')}>
        <Text span>Next</Text>
      </Button>
    )
  })
  .add('Primary', () => {
    return (
      <Button type="primary" onClick={action('clicked')}>
        <Text span>Next</Text>
      </Button>
    )
  })

storiesOf('AlertMessage', module)
  .add('Info', () => {
    const alertMessageProps = {
      title: 'Please Note',
      type: 'info',
      content:
      `
      <p>Refunds made after X days can only be made from the organisation processing the refunds account. if you want other organisations to participate in the refund, you are responsible for coordinating with those other organizations.</p>
      <p>Refunds can only be processed against the credit card from which the original payment was made</p>
      `
    }
    return (
      <AlertMessage {...alertMessageProps} />
    )
  })
  .add('Warning', () => {
    const alertMessageProps = {
      title: 'Warning Title',
      type: 'warning',
      content:
      `
      <p>Refunds made after X days can only be made from the organisation processing the refunds account. if you want other organisations to participate in the refund, you are responsible for coordinating with those other organizations.</p>
      <p>Refunds can only be processed against the credit card from which the original payment was made</p>
      `
    }
    return (
      <AlertMessage {...alertMessageProps} />
    )
  })


storiesOf('BasicTable', module)
  .add('BasicTable', () => {
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
    return (
      <BasicTable {...BasicTableProps} />
    )
  })
