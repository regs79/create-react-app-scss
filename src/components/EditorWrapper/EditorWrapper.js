/* eslint-disable */
import React from 'react'

import EditorTool from 'components/EditorTool'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
// import styles from './EditorWrapper.scss'
let html = `
  <strong>Hello world</strong>
  <p>This is example text</p>
  <p>Another line of example</p>
  <ul>
    <li>Example of listing #1</li>
    <li>Example of listing #2</li>
    <li>Example of listing #3</li>
  </ul>
  <p>Back to normal text</p>
  <i>Haha, this is so fun!</i>
`

class EditorWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      html: html,
    }
  }

  updateHtml(html) {
    this.setState({
      html,
    })
  }

  render() {
    return (
      <div className="d-flex align-items-start flex-column">
        <EditorTool
          value={ this.state.html }
          onChange={ (html) => this.updateHtml(html) }
          debounce={ 500 }
        />
      </div>
    )
  }
}

EditorWrapper.propTypes = {
}

EditorWrapper.defaultProps = {
}

export default EditorWrapper
