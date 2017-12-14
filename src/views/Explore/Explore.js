import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import Hero from 'components/Hero'
import Card from 'components/Card'
import defaultImg from 'assets/images/card-default.jpg'
// import images from 'assets/images/card-default.jpg'
// import { Grid, Image } from 'semantic-ui-react'
import { getPageName } from 'utils'

class Explore extends React.Component {
  render() {
    const heroProps = {
      headline: getPageName(this.props.location)
    }

    return (
      <div>
        <Hero {...heroProps} />
        <div className="container-l container-content">
          <div className="ui stackable three column grid">
            <div className="column">
              <Card
                title={faker.lorem.sentence()}
                subtitle={faker.lorem.sentence()}
                url={defaultImg}
              />
            </div>
            <div className="column">
              <Card
                title={faker.lorem.sentence()}
                subtitle={faker.lorem.sentence()}
                url={'https://pixabay.com/get/eb3cb80a2bf6073ed1534705fb094195e572e7dd18ac104494f3c07ea6e9b4ba/fantasy-2995326_1920.jpg'}
              />
            </div>
            <div className="column">
              <Card
                title={faker.lorem.sentence()}
                subtitle={faker.lorem.sentence()}
                url={'https://pixabay.com/get/eb3cb9092bf0043ed1534705fb094195e572e7dd18ac104494f3c07ea6e9b6ba/melbourne-2986345_1920.jpg'}
              />
            </div>
            <div className="column">
              <Card
                title={faker.lorem.sentence()}
                subtitle={faker.lorem.sentence()}
                url={defaultImg}
              />
            </div>
            <div className="column">
              <Card
                title={faker.lorem.sentence()}
                subtitle={faker.lorem.sentence()}
                url={'https://pixabay.com/get/eb3cb80a2bf6073ed1534705fb094195e572e7dd18ac104494f3c07ea6e9b4ba/fantasy-2995326_1920.jpg'}
              />
            </div>
            <div className="column">
              <Card
                title={faker.lorem.sentence()}
                subtitle={faker.lorem.sentence()}
                url={'https://pixabay.com/get/eb3cb9092bf0043ed1534705fb094195e572e7dd18ac104494f3c07ea6e9b6ba/melbourne-2986345_1920.jpg'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Explore.propTypes = {

}

PropTypes.defaultProps = {

}

export default Explore
