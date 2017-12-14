import React from 'react'
import PropTypes from 'prop-types'
import Hero from 'components/Hero'
import { getPageName } from 'utils'
// import images from 'assets/images/card-default.jpg'
// import { Grid, Image } from 'semantic-ui-react'

class Events extends React.Component {
  render() {
    const heroProps = {
      headline: getPageName(this.props.location)
    }

    return (
      <div>
        <Hero {...heroProps}/>
        <div className="container container-content">
          Events Content
        </div>
      </div>
    );
  }
}

Events.propTypes = {

}

PropTypes.defaultProps = {

}

export default Events
