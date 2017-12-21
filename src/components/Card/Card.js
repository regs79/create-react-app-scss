import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Card.scss'

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <a href="#" className={styles.link}>
        <div className={styles.cardImage}>
          <img
            src={`https://cdn.pixabay.com/photo/2017/12/04/03/06/thai-noodle-2996247_640.jpg`}
            className={cn('img-fluid', styles.image)}
            alt="Card"
          />
          <div className={styles.cardInfo}>
            <span className={styles.head}>{faker.lorem.sentence()}</span>
            <span className={styles.sub}>1 ตำแหน่ง - $25 / hr</span>
          </div>
        </div>
      </a>
      <div className={styles.content}>
        <a className={styles.link}>
          <div className={styles.details}>
            <h3>{faker.company.companyName()}</h3>
            <span>~1.4 km • {faker.name.jobArea()}</span>
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
