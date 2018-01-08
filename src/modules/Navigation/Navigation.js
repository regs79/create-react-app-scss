import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <ul className="nav bg-primary">
        <li className="nav-item">
          <Link className="nav-link text-light active" to="/">SportSTG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">New Page</Link>
        </li>
      </ul>
    );
  }
}

Navigation.propTypes = {
};

Navigation.defaultProps = {
};

export default Navigation
