import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Card.scss'
import defaultImg from 'assets/images/card-default.jpg'
import Poster from 'components/Poster'

export const Card = ({ children }) => {
  return (
    <div className={cn('col col-12 no-padding', styles.card, styles.default)}>
      <div className={cn('col col-5 no-padding', styles.thumb)}>
        <a href="#img">
          <div className={styles.imgCover} style={{ backgroundImage: `url(${defaultImg})`}}/>
        </a>
      </div>
      <div className={cn('col col-7', styles.content)}>
        <div className={styles.title}>
          <a href="#link">จะเกิดอะไรขึ้นได้บ้างกับนักเรียนไทย ที่จะยื่นวีซ่ามาออสเตรเลียหลัง วันที่ 31 มีนาคม 2017</a>
        </div>
        <div className="row clear">
          <Poster name="Tim Tawan" className={styles.poster} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {

}

export default Card
