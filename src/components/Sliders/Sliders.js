import React from 'react'
import cn from 'classnames'
import styles from './Sliders.scss'
import Slider from 'react-slick'

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
  const prevArrowProps = {
    className: cn(className, styles.prevArrow),
    style: {
      ...style,
    },
    onClick: onClick,
  }
  return React.createElement('div', prevArrowProps)
}

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
