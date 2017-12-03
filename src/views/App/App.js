import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  componentWillMount() {
    console.log(this.props)
    this.props.getUserAccess()
  }

  render() {
    const { isAuthenticated, children } = this.props

    if(!isAuthenticated) {
      return (
        <div>
          <h1>Accessing..</h1>
        </div>
      )
    }

    return (
      <div>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
        })}
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
