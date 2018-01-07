/* eslint-disable */
import React from 'react'

import EditorTool from 'components/EditorTool'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
// import styles from './EditorWrapper.scss'
let html = `
  <h1>This is a Title</h1>
  <p>Here's some text, it's useful</p>
  <p>More text, some inline <strong>styling</strong> for <em>some</em> elements</p>
`

class EditorWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      html: props.html,
    }
  }

  updateHtml(html) {
    this.setState({
      html,
    })
  }

  render() {
    return (
      <EditorTool
        value={ this.state.html }
        onChange={ (html) => this.updateHtml(html) }
        debounce={ 500 }
      />
    )
  }
}

EditorWrapper.propTypes = {
}

EditorWrapper.defaultProps = {
}

export default EditorWrapper
