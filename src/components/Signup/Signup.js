import React from 'react'
import PropTypes from 'prop-types'

import styles from './Signup.scss'

export const Signup = ({ children }) => {
  return (
    <div className={styles.boxContinaer}>
      Signup
    </div>
  );
}

Signup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Signup
