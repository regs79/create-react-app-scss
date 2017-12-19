import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Home.scss'
import Hero from 'components/Hero'
import Sliders from 'components/Sliders'
import Card from 'components/Card'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="container">
          <div className={styles.jobs}>
            <div className={cn('col-12 col-4-m col-4-l', styles.card)}>
              <Card />
            </div>
            <div className={cn('col-12 col-4-m col-4-l', styles.card)}>
              <Card />
            </div>
            <div className={cn('col-12 col-4-m col-4-l', styles.card)}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home
