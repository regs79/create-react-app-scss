import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import images from 'assets/images/95digital.png'
import Icon from 'components/Icon'
import styles from './Footer.scss'

export const Footer = (props) => {
  return (
    <footer>
      {/* <div className={cn('mt-5 pt-4 pb-4', styles.sub)}>
        <div className="container">
          <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
        </div>
      </div> */}
      <div className={cn('pt-3 pb-3', styles.footer)}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 mt-2">
              <ul className="list-inline">
                {/* <li className="list-inline-item"><img src={images} className="img-fluid" width="120" /></li> */}
                <li className="list-inline-item pr-4">
                  Copyright (c) Thaimates.com.au
                </li>
                <li className="list-inline-item pr-4">
                  <a href="#">หน้าแรก</a>
                </li>
                <li className="list-inline-item pr-4">
                  <a href="#">กระทู้ทั้งหมด</a>
                </li>
                <li className="list-inline-item pr-4">
                  <a href="#">หาที่พัก</a>
                </li>
                <li className="list-inline-item pr-4">
                  <a href="#">หางาน</a>
                </li>
                <li className="list-inline-item pr-4">
                  <a href="#">ตลาดซื้อ-ขาย</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 text-right">
              <ul className="list-inline">
                <li className="list-inline-item pl-3">
                  <a href="#">
                    <Icon icon="ion-social-facebook" size={32} />
                  </a>
                </li>
                <li className="list-inline-item pl-3">
                  <a href="#">
                    <Icon icon="ion-social-instagram" size={32} />
                  </a>
                </li>
                <li className="list-inline-item pl-3">
                  <a href="#">
                    <Icon icon="ion-social-youtube" size={32} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default Footer
