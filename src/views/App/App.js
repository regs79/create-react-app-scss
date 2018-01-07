import React from 'react'
import PropTypes from 'prop-types'

import cn from 'classnames'
import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends React.Component {
  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const { location, children } = this.props
    const isHome = () => {
      if (location.pathname.indexOf('create') !== -1 || location.pathname.indexOf('user') !== -1) {
        return false
      }
      return true
    }

    const background = cn({
      'bg-bluelight': location.pathname.indexOf('stories') !== -1,
    })

    return (
      <div className={cn(background)}>
        <Header
          isHome={isHome()}
        />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
          return null
        })}
        <Footer
          isHome={isHome()}
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
