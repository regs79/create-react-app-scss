import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { children } = this.props
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

export default App
