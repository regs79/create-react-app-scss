/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
        })}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getUserAccess: PropTypes.func,
}

App.defaultProps = {
  children: null,
  isAuthenticated: false,
  getUserAccess: null,
}

export default App
