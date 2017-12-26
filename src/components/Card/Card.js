import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import SaveTo from 'components/SaveTo'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Badge from 'components/Badge'
import LazyImage from 'components/LazyImage'
import styles from './Card.scss'

export const Card = ({
  headline,
  subheadline,
  title,
  subtitle,
  showTag,
  showPoster,
  thumbnail,
}) => {
  const isShowPoster = showPoster === true
  const isShowTag = showTag === true
  return (
    <div className={styles.card}>
      <div className={cn('card bg-light text-white rounded', styles.innderCard)}>
        <Link to="" className={styles.cover}>
          <LazyImage className="card-img" src={thumbnail} alt="Card image" />
        </Link>
        <SaveTo className={styles.saveTo} />
        <div className={cn('card-img-overlay rounded', styles.content)}>
          {
            (headline) &&
            <p className={cn('nopadding', styles.title)}>
              <Link to="" className="text-light">
                {headline}
              </Link>
            </p>
          }
          {
            (subheadline) &&
            <p className={cn('card-text small', styles.subtitle)}>{subheadline}</p>
          }
        </div>
      </div>
      <div className="row no-gutters mt-1">
        <div className="col-10">
          {(title) &&
            <p className="nopadding">
              <Link to="">
                {title}
              </Link>
            </p>
          }
          {(subtitle) &&
            <p className="small text-muted nopadding">
              <i className="icon ion-location" />
              <span className="pl-2">{subtitle}</span>
            </p>
          }
        </div>
        {(isShowPoster) &&
          <div className="col-2 pt-2 text-right">
            <img src={faker.internet.avatar()} alt="..." className="img-thumbnail rounded-circle" />
          </div>
        }
        {(isShowTag) &&
          <div className="col-12">
            <Badge type="primary" title="Free Delivery" link="/" />
            <Badge type="secondary" title="Pick-up Only" link="/" />
          </div>
        }
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  showTag: PropTypes.bool,
  showPoster: PropTypes.bool,
};

Card.defaultProps = {
  title: null,
  subtitle: null,
  headline: null,
  subheadline: null,
  showTag: false,
  showPoster: true,
};

export default Card
