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
  return React.createElement('div', nextArrowProps)
}

const PrevArrow = ({
  className,
  style,
  onClick,
}) => {
  console.log('style', style)
  const prevArrowProps = {
    className: cn(className, styles.prevArrow),
    style: {
      ...style,
    },
    onClick: onClick,
  }
  return React.createElement('div', prevArrowProps)
}

// $container-m:                                   720px !default;
// $container-l:                                   960px !default;
// $container-xl:                                  1120px !default;
export const Sliders = ({
  children,
  slidesToShow,
}) => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    lazyLoad: true,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'row',
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
