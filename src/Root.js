/* eslint-disable */
import React, { Component } from 'react'
import Bluekit from 'react-bluekit'
import componentsIndex from './componentsIndex'

class Root extends Component {
  render() {
    return (
      <Bluekit
        componentsIndex={componentsIndex}
      />
    )
  }
}

export default Root
