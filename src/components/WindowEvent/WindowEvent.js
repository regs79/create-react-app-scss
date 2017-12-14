import React from 'react'

const MOBILE_SIZE = 568
const DESKTOP_SIZE = 1024

export default function WindowEvent(WrapperComponent) {
  return class Window extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        scrollTop: 0,
        windowSize: {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      }
      this.handleResize = this.handleResize.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnMount() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleResize() {
      this.setState({
        windowSize: {
          width: window.innerWidth,
          height: window.innerHeight,
          mobile: window.innerWidth <= MOBILE_SIZE,
          desktop: window.innerWidth >= DESKTOP_SIZE,
        }
      })
    }

    handleScroll() {
      this.setState({
        scrollTop: window.pageYOffset,
      })
    }

    render() {

      return (
        <WrapperComponent
          {...this.props}
          {...this.state}
      />)
    }
  }

}
