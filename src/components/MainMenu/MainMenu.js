import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Image, Dropdown, Menu, Button } from 'semantic-ui-react'
import styles from './MainMenu.scss'

const stateOptions = [
  { key: 'VIC', value: 'AL', text: 'Victoria' },
  { key: 'NSW', value: 'UT', text: 'New South Wales' },
  { key: 'SA', value: 'VA', text: 'South Australia' },
  { key: 'WA', value: 'WV', text: 'Western Australia' },
  { key: 'QL', value: 'VT', text: 'Queensland' },
  { key: 'TS', value: 'WA', text: 'Tasmania' },
]

const langOptions = [
  { key: 'ENG', value: 'EN', text: 'English' },
  { key: 'THB', value: 'TH', text: 'Thai' },
]

export const MainMenu = ({
  classNames,
  inverted,
  pointing,
  secondary,
}) => {

  const trigger = (
    <span>
      <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
    </span>
  )

  const options = [
    {
      key: 'user',
      text: <span>Signed in as <strong>Bob Smith</strong></span>,
      disabled: true,
    },
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

  const menuProps = {
    inverted,
    pointing,
    secondary,
  }

  const buttonProps = {
    inverted,
  }

  const {
    container: containerClassname
  } = classNames

  return (
    <Menu {...menuProps} className={cn(styles.container, containerClassname)}>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as='a'>
        <Dropdown inline options={stateOptions} defaultValue={stateOptions[0].value} />
      </Menu.Item>
      <Menu.Item as={Link} to='/explore'>Explore</Menu.Item>
      <Menu.Item as={Link} to='/events'>Events</Menu.Item>
      <Menu.Item as={Link} to='/jobs'>Jobs</Menu.Item>
      <Menu.Item as={Link} to='/house'>House</Menu.Item>
      <Menu.Item as={Link} to='/market'>Market</Menu.Item>
      <Menu.Item position='right'>
        <Button as={Link} to='/login' {...buttonProps}>Log in</Button>
        <Button as={Link} to='/signup' {...buttonProps} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        <Dropdown inline options={langOptions} defaultValue={langOptions[0].value} style={{ marginLeft: '1em' }} />
        {/* <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} /> */}
      </Menu.Item>
    </Menu>
  );
}

MainMenu.propTypes = {
  classNames: PropTypes.object,
  inverted: PropTypes.bool,
  pointing: PropTypes.bool,
  secondary: PropTypes.bool,
}

MainMenu.defaultProps = {
  classNames: {
    container: null,
  },
  inverted: false,
  pointing: false,
  secondary: false,
}

export default MainMenu
