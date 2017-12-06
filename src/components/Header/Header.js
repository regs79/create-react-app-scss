import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Header.scss'
import Icon from 'components/Icon'
import MediaQuery from 'react-responsive'

export const Header = ({ children }) => {
  return (
    <div className={cn(styles.container, styles.header)}>
      <div className="container">
        <div className="row clear">
          <div className="col-2 col-1-m">
            <button className={cn('button button-transparent', styles.menuBtn)}>
              <Icon icon="ion-navicon" className={styles.icons} color={'grey'} size={32} />
            </button>
          </div>
          <div className="col-8 col-9-m"><span className="invisible">LOGO</span></div>
          <MediaQuery maxWidth={767}>
            <div className="col-2 col-2-m no-padding">
              <button className={cn(styles.btn, 'button button-primary')}>
                <Icon icon="ion-compose" className={styles.icons} color={'white'} size={32} />
              </button>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <div className="col-2 col-2-m no-padding text-right">
              <button className={cn('button button-primary', styles.cta)}>
                เขียนอะไรสักอย่าง
              </button>
            </div>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
