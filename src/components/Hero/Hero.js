import React from 'react'
import PropTypes from 'prop-types'

import styles from './Hero.scss'

export const Hero = ({ children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}></div>
      {/* {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <div className={styles.content}>
              {React.cloneElement(child)}
            </div>
          )
        }
      })} */}
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
