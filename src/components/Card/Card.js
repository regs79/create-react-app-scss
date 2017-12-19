import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Card.scss'

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <a href="/image" className={styles.link}>
        <div className={styles.cardImage}>
          <img
            src='https://res-2.cloudinary.com/hd1n2hd4y/image/upload/f_auto,fl_lossy,q_auto,c_fill,w_320,h_214,dpr_2.0/l-Harcourts-6VkBnOOlKEG6lHRqbfOjgg.jpg'
            className={cn('img-fluid', styles.image)}
            alt="Card"
          />
          <div className={styles.cardInfo}>
            <span className={styles.head}>พ่อครัวร้านอาหารไทย</span>
            <span className={styles.sub}>1 ตำแหน่ง - $25 / hr</span>
          </div>
        </div>
      </a>
      <div className={styles.content}>
        <a className={styles.link}>
          <div className={styles.details}>
            <h3>At Ease Thai Restaurant</h3>
            <span>~1.4 km • Abbotsford</span>
          </div>
        </a>
        <div className={styles.options}>
          options
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
};

export default Card
