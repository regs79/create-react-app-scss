import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    const { children } = this.props
    if (this.state.hasError) {
      return <div>There is an error</div>
    }

    return React.Children.map(children, (child) =>
      React.isValidElement(child) ?
      React.cloneElement(child) : null
    )
  }
}

export default App
