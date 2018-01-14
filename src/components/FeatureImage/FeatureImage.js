/* eslint-disable */
import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
// import WindowEvent from 'components/WindowEvent'
import styles from './FeatureImage.scss'
import Icon from 'components/Icon'
import UserBox from 'components/UserBox'
import tawan from 'assets/images/tawan.jpg'
import cover from 'assets/images/cover2.jpg'

export const FeatureImage = (props) => {
  return (
    <div
      className={cn('mt-m-7', styles.features, 'jumbotron-fluid', styles.cover)}
      style={{
        backgroundImage: `url(${cover})`,
        height: '50%',
      }}
    >
      <div className={cn('container', styles.content)}>
        {/* <UserBox
          showTime={false}
          thumbnail={false}
          username="Tawan"
          photo={tawan}
          fontColor="white"
        /> */}
        {/* <div className={styles.leadContent}>
          <p className={styles.lead}>'บาหลีเป็นเกาะชิคๆ'</p>
          <p className={styles.lead}>เที่ยวบาหลีแบบครบ จบใน4วัน</p>
        </div> */}
      </div>
    </div>
  )
}

FeatureImage.propTypes = {
}

FeatureImage.defaultProps = {
}

export default FeatureImage
