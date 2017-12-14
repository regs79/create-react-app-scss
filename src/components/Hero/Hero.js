import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Hero.scss'
import { Grid, Button } from 'semantic-ui-react'
import { firstLetterUppercase } from 'utils'

export const Hero = ({ headline, title }) => {
  const pageName = firstLetterUppercase(headline)

  return (
    <div className={styles.container}>
      <div className={cn('container-l', styles.hero)}>
        <div className="ui stackable two column grid">
          <div className="column">
            <h1 className={styles.h1}>{pageName}</h1>
            <h1 className={styles.subh1}>Victoria</h1>
          </div>
          <div className="column">
            <Button primary size='huge' floated='right'>
              <span>{title}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  headline: PropTypes.string,
  title: PropTypes.string,
}

Hero.defaultProps = {
  headline: 'Explore',
  title: 'โพ้สใหม่?',
}

export default Hero
