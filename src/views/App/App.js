import React from 'react';
import PropTypes from 'prop-types'
import HeroSegment from 'components/HeroSegment'
import Footer from 'components/Footer'
import MainHeader from 'components/MainHeader'
import { isHome } from 'utils'

class App extends React.Component {

  render() {
    const { children } = this.props
    const _isHome = isHome(this.props.location)
    return (
      <div>
        {(_isHome) ? <HeroSegment children={<MainHeader />}/> : <MainHeader />}
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
