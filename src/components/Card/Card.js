import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Card.scss'
import defaultImg from 'assets/images/card-default.jpg'
import Poster from 'components/Poster'

export const Card = ({ children, title, subtitle, url }) => {
  return (
    <div className="ui fluid card">
      <div className="image">
        <img src={url} alt="Card" />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <a>Friends</a>
        </div>
        <div className="description">
          {subtitle}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Joined in 2013
        </span>
        <span>
          <i className="user icon"></i>
          75 Friends
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {

}

export default Card
