import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { isHome } from 'utils'

// Components
import Header from 'components/Header'

class App extends React.Component {
  render() {
    const { children } = this.props
    const _isHome = isHome(this.props.location)


    return (
      <div>
        <Header
          onClick={this.handleShow}
        />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
        })}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

App.defaultProps = {
  children: null,
}

export default App
