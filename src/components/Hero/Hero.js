import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Button from 'components/Button'
import { Link } from 'react-router-dom'
import styles from './Hero.scss'
import heroImage from 'assets/images/mel11.jpg'

export const Hero = (props) => {
  return (
    <div className={cn(styles['hero'], 'jumbotron jumbotron-fluid', styles['hero-section'])} style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url(${heroImage})`
      }}>
      <div className="container">
        <div className="row align-items-start text-light">
          <div className={cn('col-sm-12 col-md-6 col-lg-5', styles['content'])}>
            <span className={styles['hero-title']}>
              <p className="nopadding">More than 2.5m listings</p>
              <p className="nopadding">Think Thaimates this</p>
              <p className="nopadding">Christmas</p>
            </span>
            <h3 className={cn(styles['hero-subtitle'], 'mt-4')}>
              <p className="nopadding">ศูนย์รวมคนไทยในประเทศออสเตรเลีย</p>
              <p className="nopadding">หางาน หาเพื่อน หาบ้านพัก ซื้อ-ขาย</p>
            </h3>
            <div className="mt-4">
              <Link to="/explore" className="btn btn-block btn-darkpink text-white">EXPLORE THAIMATES</Link>
            </div>
            <div className="row no-gutters mt-4">
              <div className="col-sm-12 col-md-4">
                <img src="https://homely-web.appiancdn.com/assets/images/home-app-store-badge.svg?2671.0.0.0" className="img-fluid" />
              </div>
              <div className="col-sm-12 col-md-7">
                <p className="small pl-1">Download our Thaimates iOS/Android application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
};

export default Hero
