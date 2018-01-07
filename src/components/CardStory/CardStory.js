import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import Icon from 'components/Icon'
import styles from './CardStory.scss'

export const CardStory = () => {
  const times = moment(faker.date.past(10)).format('D MMM ○ H:s A')
  return (
    <article className={cn('p-md-0', styles.cardstorycontainer)}>
      <div className="d-flex justify-content-start">
        <div className={styles.photo}>
          <img src={faker.internet.avatar()} alt="User" className="img-thumbnail rounded-circle" />
        </div>
        <div className="col d-flex align-items-center justify-content-between pl-2">
          <div className={styles.user}>
            <h6 className="m-0"><a href="/" className="font-weight-bold">{faker.internet.userName()}</a></h6>
            <span className="text-muted small">{`${times}`}</span>
          </div>
          <div className="option">
            <span className={styles.spanbtn}>
              <Icon icon="ion-more" />
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start mt-2">
        <div className="story-content">
          <figure className={cn('figure mb-3', styles.figure)}>
            <img
              src="https://f.ptcdn.info/933/049/000/on0k1ohk3507Noy7Mwk-o.jpg"
              className="figure-img img-fluid"
              alt="A generic square placeholder with rounded corners in a figure."
            />
            <figcaption className="figure-caption text-center">รีวิวเที่ยวเกาะบาหลี 4วัน 4คืน 4หาด 2เมือง</figcaption>
          </figure>
          <p>{faker.lorem.sentences()}</p>
          {/* <div className={cn('d-flex justify-content-center', styles.rowcontent)}>
            <img src="http://lorempixel.com/1024/640" className="img-fluid" alt="d" />
            <div className="caption center-block">Test</div>
          </div> */}
          <figure className={cn('figure mb-3', styles.figure)}>
            <img
              src="http://lorempixel.com/1024/640"
              className="figure-img img-fluid"
              alt="A generic square placeholder with rounded corners in a figure."
            />
            <figcaption className="figure-caption text-center">A caption for the above image.</figcaption>
          </figure>
          <p>{faker.lorem.paragraphs()}</p>
          <p>{faker.lorem.paragraphs()}</p>
        </div>
      </div>
      <div className="d-flex justify-content-start mt-3">
        <div className="d-flex align-items-center">
          <ul className="list-inline m-0">
            <li className="list-inline-item">
              <button type="button" className="btn btn-outline-danger">
                <Icon color="red" icon="ion-android-favorite" label={`${faker.random.number()} views`} />
              </button>
            </li>
            <li className="list-inline-item">
              <button type="button" className="btn btn-primary">
                <Icon color="red" icon="ion-android-share" label="Share" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

CardStory.propTypes = {
}

CardStory.defaultProps = {
}

export default CardStory
