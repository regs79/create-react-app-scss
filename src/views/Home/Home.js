import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'reactstrap'
import { Switch, Route, Link } from 'react-router-dom'

import Box from 'components/Box'
import About from 'containers/About'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.handleSayHello = this.handleSayHello.bind(this)
  }

  handleSayHello() {
    this.props.sayHello(2)
  }

  render() {
    // const { userInfo, hello } = this.props
    return (
       <div>
         Home
       </div>
    );
  }

}

Home.propTypes = {
  hello: PropTypes.string,
  handleSayHello: PropTypes.func,
}

Home.defaultProps = {
  hello: null,
  handleSayHello: null,
}

export default Home
