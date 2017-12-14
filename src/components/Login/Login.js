import React from 'react'
import PropTypes from 'prop-types'

import styles from './Login.scss'

export const Login = ({ children }) => {
  return (
    <div className={styles.boxContinaer}>
      Login
    </div>
  );
}

Login.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Login
