import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './MainHeader.scss'
import MediaQuery from 'react-responsive'
import MainMenu from 'components/MainMenu'

export const MainHeader = () => {
  const mainMenuProps = {
    pointing: true,
    secondary: true,
    classNames: {
      container: styles.menuContainer,
    },
  }

  return (
    <div className={cn(styles.container, styles.header)}>
      <MediaQuery query="(max-device-width: 1000px)">
        <div>
          Menu for mobile
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 1000px)">
        <div className="container">
          <div className="ui">
            <MainMenu {...mainMenuProps} />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

MainHeader.propTypes = {
}

export default MainHeader
