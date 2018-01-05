import React from 'react'
// import PropTypes from 'prop-types'

import Box from 'components/Box'
import PageHeadline from 'components/PageHeadline'

// SVG icon
import svgQuestion from 'assets/images/icons/question.svg'
import svgReview from 'assets/images/icons/review1.svg'
import svgMarket from 'assets/images/icons/cart.svg'

class Create extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <div className="container">
          <div className="p-4 mt-5">
            <PageHeadline title="Let's create something new" />
          </div>
          <div className="row p-4 mx-0">
            <div className="col-sm-12 col-md-4 mb-4">
              <Box
                image={svgQuestion}
                subtitle="Perfect when you want definitive answers on a topic"
                title="Ask a question"
              />
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <Box
                image={svgReview}
                subtitle="Share us more about your stories. We'd to read it"
                title="Write a story"
              />
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <Box
                image={svgMarket}
                subtitle="Want to Sell & Buy stuffs?, We might could help you"
                title="Sell a thing"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Create.propTypes = {

}

export default Create
