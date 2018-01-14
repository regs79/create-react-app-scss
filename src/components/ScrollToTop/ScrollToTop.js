/* eslint-disable */
import React from 'react'
import { withRouter } from 'react-router-dom'

const SCROLL_STEP = 50
const DELAY_MS = 16.66

class ScrollToTop extends React.Component {
  constructor() {
    super()
    this.state = {
      intervalId: 0
    }

    this.intervalId = null
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.scrollToTop()
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  scrollToTop() {
    this.intervalId = setInterval(this.scrollStep.bind(this), DELAY_MS)
    this.setState({ intervalId: this.intervalId })
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - SCROLL_STEP)
  }

  render() {
    const { children } = this.props
    return React.cloneElement(children)
  }
}

export default withRouter(ScrollToTop)
