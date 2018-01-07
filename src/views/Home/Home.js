// import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'

// import cn from 'classnames'
import times from 'lodash/times'
import Hero from 'components/Hero'
import CardActivity from 'components/CardActivity'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.renderFeaturesArticles = this.renderFeaturesArticles.bind(this)
  }

  renderActivities() {
    return (
      <section className="mt-4">
        <h5>Trending activity</h5>
        <div className="mt-4">
          <div className="row">
            <div className="col-12 col-md-9">
              {
                times(20, () => {
                  return (
                    <CardActivity />
                  )
                })
              }
            </div>
            <div className="col-12 col-md-3">
              SIDEBAR
            </div>
          </div>
        </div>
      </section>
    )
  }

  renderCategories() {
    return (
      <section className="mt-4">
        <h5>Browse the community</h5>
        <div className="mt-4">
          ..
        </div>
      </section>
    )
  }

  renderFeaturesArticles() {
    return (
      <section className="mt-4">
        <h5>Feature Articles</h5>
        <div className="mt-2">
          <div className="row">
            <div className="col-12 col-md-5 p-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://tnckb94959.i.lithium.com/t5/image/serverpage/image-id/11957iB85A4D21A9356FAD/image-size/medium?v=1.0&px=400"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 mt-md-0">
              <div className="row">
                {
                  times(4, (key) => {
                    return (
                      <div className="col-6 p-3" key={key}>
                        <div className="card">
                          <img
                            className="card-img-top"
                            src="https://tnckb94959.i.lithium.com/t5/image/serverpage/image-id/11957iB85A4D21A9356FAD/image-size/medium?v=1.0&px=400"
                            alt="Card cap"
                          />
                          <div className="card-body p-2">
                            <h5 className="card-title mb-0">Card title</h5>
                          </div>
                          <div className="card-footer p-2 bg-white">
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <div>
        <Hero />
        <div className="container">
          {this.renderCategories()}
          {this.renderFeaturesArticles()}
          {this.renderActivities()}
        </div>
      </div>
    )
  }
}

Home.propTypes = {
}

Home.defaultProps = {
}

export default Home
