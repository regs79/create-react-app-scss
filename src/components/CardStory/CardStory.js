/*  eslint-disable */

import faker from 'faker'
import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import Icon from 'components/Icon'
import styles from './CardStory.scss'
import tawan from 'assets/images/tawan.jpg'
import UserBox from 'components/UserBox'
const Image = ({
  url,
  caption,
}) => {
  return (
    <figure className={cn('d-flex justify-content-center mb-3', styles.figure)}>
      <div>
        <img
          src={url}
          className={cn('figure-img img-fluid', styles.figureImage)}
          alt="A generic square placeholder with rounded corners in a figure."
        />
        <figcaption className="figure-caption text-center">{caption}</figcaption>
      </div>
    </figure>
  )
}

export const CardStory = () => {
  const times = moment(faker.date.past(10)).format('D MMM ○ H:s A')
  return (
    <article className={cn('p-2', styles.cardstorycontainer)}>
      <UserBox
        photo={tawan}
        username="Tawan"
      />
      <div className="d-flex justify-content-start mt-2">
        <div className="story-content">
          <p>{faker.lorem.sentences()}</p>
          <Image
            url={"https://picsum.photos/400/300/?random"}
            caption={faker.lorem.sentence()}
          />
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
