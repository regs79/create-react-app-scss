import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Sliders.scss'
import Slider from 'react-slick'
import Icon from 'components/Icon'

const NextArrow = ({
  className,
  style,
  onClick,
}) => {
  const nextArrowProps = {
    className: cn(className, styles.nextArrow),
    style: {
      ...style,
    },
    onClick: onClick,
  }
  // return React.createElement('div', nextArrowProps, <Icon icon="ion-android-arrow-dropright-circle" size="32" />)
}

const PrevArrow = ({
  className,
  style,
  onClick,
}) => {
  const prevArrowProps = {
    className: cn(className, styles.prevArrow),
    style: {
      ...style,
    },
    onClick: onClick,
  }
  return React.createElement('div', prevArrowProps, <Icon icon="ion-android-arrow-dropleft-circle" size="32" />)
}

export const Sliders = ({
  children,
}) => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   },
    //   {
    //     breakpoint: 100000,
    //     settings: 'unslick'
    //   }
    // ]
  }

  return (
    <div className={styles.sliders}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

Sliders.propTypes = {
};

export default Sliders
