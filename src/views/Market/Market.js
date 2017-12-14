import React from 'react'
import PropTypes from 'prop-types'
import Hero from 'components/Hero'
// import images from 'assets/images/card-default.jpg'
// import { Grid, Image } from 'semantic-ui-react'

import { getPageName } from 'utils'

class Market extends React.Component {
  render() {
    const heroProps = {
      headline: getPageName(this.props.location)
    }

    return (
      <div>
        <Hero {...heroProps} />
        <div className="container container-content">
          Market Content
        </div>
      </div>
    );
  }
}

Market.propTypes = {

}

PropTypes.defaultProps = {

}

export default Market
