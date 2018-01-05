import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends React.Component {
  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const { location, children } = this.props
    const isHome = location.pathname === '/'

    return (
      <div>
        <Header
          isHome={isHome}
        />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
          return null
        })}
        <Footer
          isHome={isHome}
        />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

App.defaultProps = {
  location: {},
}

export default App
