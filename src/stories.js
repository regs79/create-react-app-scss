import './styles/reset.css'
import './assets/css/font-awesome.css'
import './assets/css/ionicons.css'
import 'normalize.css'
import './styles/base.css'
import './assets/css/bootstrap.css'

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import faker from 'faker'
// components
import Text from 'components/Text'
import Button from 'components/Button'
import BasicTable from 'components/BasicTable'
import AlertMessage from 'components/AlertMessage'
import Checkbox from 'components/Checkbox'
import Dropdown from 'components/Dropdown'
import InputLight from 'components/InputLight'
import Modal from 'components/Modal'

// views
import { refundsData } from 'fixtures/refunds'
import { issuessData } from 'fixtures/issuess'
import Home from 'views/Home'

storiesOf('Welcome', module)
  .add('Example Issue Refund Modal',
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
      title: 'Note Title',
      type: 'info',
      content: `<p>Generated 1 paragraph, 5 words, 27 bytes of Lorem Ipsum</p><p>Lorem ipsum dolor sit amet.</p>`
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
      content: `<p>Generated 1 paragraph, 5 words, 27 bytes of Lorem Ipsum</p><p>Lorem ipsum dolor sit amet.</p>`
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
          columns: ['ID', 'First Name', 'Last Name', 'Date Of Birth'],
          data: {
            id: 92345677,
            name: 'Tim',
            lastname: 'Tawan',
            dateofbirth: '12 August 1990'
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

storiesOf('Modal', module)
  .add('Opened Modal',
    withInfo(
      {
        text: 'Modal Component',
      })(() => {
      const modalProps = {
        fluid: true,
        isOpen: true,
        name: 'Modal Name',
        handleCloseModal: action('clicked'),
      }
      return (
        <Modal {...modalProps}>
          <Text>Modal Content</Text>
        </Modal>
      )
    })
  )
