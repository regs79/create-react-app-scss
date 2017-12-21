import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Home.scss'
import Hero from 'components/Hero'
import Sliders from 'components/Sliders'
import Card from 'components/Card'
import times from 'lodash/times'
import MediaQuery from 'react-responsive'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="container">
          <div className={styles.jobs}>
            <MediaQuery query="(min-width: 960px)">
              <Sliders>
                {times(10, () => (<div className="col-md-3"><Card /></div>))}
              </Sliders>
            </MediaQuery>
            <MediaQuery query="(max-width: 960px)">
              <div className="row">
                {times(10, () => (<div className="col-sm-12 col-md-6"><Card /></div>))}
              </div>
            </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home
