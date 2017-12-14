import React from 'react'
import PropTypes from 'prop-types'
import Hero from 'components/Hero'
// import images from 'assets/images/card-default.jpg'
// import { Grid, Image } from 'semantic-ui-react'

import { getPageName } from 'utils'

class Jobs extends React.Component {
  render() {
    const heroProps = {
      headline: getPageName(this.props.location)
    }

    return (
      <div>
        <Hero {...heroProps} />
        <div className="container container-content">
          Jobs Content
        </div>
      </div>
    );
  }
}

Jobs.propTypes = {

}

PropTypes.defaultProps = {

}

export default Jobs
