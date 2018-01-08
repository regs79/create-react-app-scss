import React from 'react';

// Components
import { asyncComponent } from 'shared/Async'
const Navigation = asyncComponent({
  resolve: () => new Promise(resolve =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('modules/Navigation'));
      },
      'Navigation'
    )
  )
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props

    if (this.state.hasError) {
      return <di>There is an error</di>
    }

    return (
      <div>
        <Navigation />
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
