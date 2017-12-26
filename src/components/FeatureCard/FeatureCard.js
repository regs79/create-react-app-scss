import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import SaveTo from 'components/SaveTo'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Badge from 'components/Badge'
import styles from './FeatureCard.scss'

export const FeatureCard = ({
  headline,
  subheadline,
  title,
  subtitle,
  showTag,
  showPoster,
}) => {
  const isShowPoster = showPoster === true
  const isShowTag = showTag === true
  return (
    <div className={styles.card}>
      <div className={cn('card bg-light text-white rounded', styles.innderCard)}>
        <Link to="">
          <img className="card-img" src={'https://source.unsplash.com/random/800x800'} alt="Card image" />
        </Link>
        <SaveTo className={styles.saveTo} />
        <div className={cn('card-img-overlay rounded', styles.content)}>
          <div className="p-2">
            {
              (headline) &&
              <p className={styles.title}>
                <Link to="" className="text-light">
                  <h3>{headline}</h3>
                </Link>
              </p>
            }
            {
              (subheadline) &&
              <p className={cn('card-textsmall', styles.subtitle)}>{subheadline}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  showTag: PropTypes.bool,
  showPoster: PropTypes.bool,
};

FeatureCard.defaultProps = {
  title: null,
  subtitle: null,
  headline: null,
  subheadline: null,
  showTag: false,
  showPoster: true,
};

export default FeatureCard
