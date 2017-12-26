import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { isHome } from 'utils'

// Components
import Drawer from 'components/Drawer'
import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawerOpen: false,
    }
    this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
  }

  handleOpenDrawer() {
    console.log('handleOpenDrawer')
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header
          handleOpenDrawer={this.handleOpenDrawer}
        />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child)
          }
        })}
        <Footer />
        {this.state.isDrawerOpen &&
          <Drawer
            handleOnClose={this.handleOpenDrawer}
          />
        }
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
