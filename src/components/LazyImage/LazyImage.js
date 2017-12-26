import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './LazyImage.scss'

const Spinner = ({ width, height }) => {
  return (
    <div className={styles.loader}>
      <svg x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
        <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
        <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
          C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="0.5s"
            repeatCount="indefinite"/>
          </path>
        </svg>
    </div>
  )
}

const DefaultPhoto = ({ width, height }) => {
  const sizes = {
    width: width,
    height: height,
  }
  return (
    <div className={styles.loader}>
      <svg {...sizes} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 455 455" enableBackground="new 0 0 455 455">
        <g>
        	<path d="M360.967,130.599c-4.06-0.818-8.018,1.8-8.841,5.86c-0.823,4.06,1.801,8.018,5.86,8.841   c1.147,0.232,2.013,1.286,2.013,2.45v160c0,1.355-1.145,2.5-2.5,2.5H179.676c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H357.5   c9.649,0,17.5-7.851,17.5-17.5v-160C375,139.46,369.099,132.247,360.967,130.599z" fill="#FFFFFF"/>
        	<path d="M274.824,130.25H97.5c-9.649,0-17.5,7.851-17.5,17.5v160c0,8.063,5.48,15.046,13.326,16.982   c0.604,0.149,1.208,0.221,1.803,0.221c3.369,0,6.432-2.287,7.276-5.705c0.992-4.021-1.463-8.086-5.484-9.078   c-0.955-0.235-1.92-1.143-1.92-2.42v-160c0-1.355,1.145-2.5,2.5-2.5h177.324c4.142,0,7.5-3.357,7.5-7.5   S278.966,130.25,274.824,130.25z" fill="#FFFFFF"/>
        	<path d="M235.363,170.798c-2.655-0.363-5.3-0.548-7.863-0.548c-31.706,0-57.5,25.794-57.5,57.5c0,2.563,0.185,5.209,0.548,7.863   c0.515,3.759,3.731,6.483,7.421,6.483c0.339,0,0.682-0.023,1.027-0.07c4.104-0.562,6.975-4.345,6.413-8.448   c-0.271-1.982-0.409-3.943-0.409-5.828c0-23.435,19.065-42.5,42.5-42.5c1.884,0,3.845,0.138,5.828,0.409   c4.108,0.564,7.886-2.309,8.448-6.413C242.338,175.143,239.467,171.359,235.363,170.798z" fill="#FFFFFF"/>
        	<path d="M219.127,284.636c2.789,0.407,5.605,0.614,8.373,0.614c31.706,0,57.5-25.794,57.5-57.5c0-2.77-0.207-5.587-0.613-8.373   c-0.599-4.099-4.408-6.934-8.505-6.337c-4.099,0.599-6.936,4.406-6.337,8.505c0.303,2.071,0.456,4.158,0.456,6.205   c0,23.435-19.065,42.5-42.5,42.5c-2.044,0-4.132-0.153-6.205-0.456c-4.099-0.6-7.907,2.238-8.505,6.337   S215.028,284.037,219.127,284.636z" fill="#FFFFFF"/>
        	<path d="M318.5,203.25c9.098,0,16.5-7.402,16.5-16.5c0-8.318-6.227-15.355-14.484-16.37c-2.293-0.277-4.585,0.509-6.218,2.142   l-10.027,10.027c-1.633,1.632-2.422,3.926-2.141,6.217C303.145,197.023,310.183,203.25,318.5,203.25z" fill="#FFFFFF"/>
        	<path d="M117.5,114.75h30c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-30c-4.142,0-7.5,3.357-7.5,7.5   S113.358,114.75,117.5,114.75z" fill="#FFFFFF"/>
        	<path d="M388.367,66.633C345.397,23.664,288.268,0,227.5,0S109.603,23.664,66.633,66.633C23.664,109.603,0,166.732,0,227.5   s23.664,117.897,66.633,160.867C109.603,431.336,166.732,455,227.5,455s117.897-23.664,160.867-66.633   C431.336,345.397,455,288.268,455,227.5S431.336,109.603,388.367,66.633z M15,227.5C15,110.327,110.327,15,227.5,15   c55.894,0,106.807,21.703,144.783,57.11L72.11,372.283C36.703,334.307,15,283.395,15,227.5z M227.5,440   c-55.894,0-106.807-21.703-144.783-57.11L382.89,82.717C418.297,120.693,440,171.606,440,227.5C440,344.673,344.673,440,227.5,440z   " fill="#FFFFFF"/>
        </g>
      </svg>
    </div>
  )
}


class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      image: null,
    }
  }

  componentDidMount() {
    const self = this
    fetch(this.props.src)
    .then((result) => {
      if (result.ok) {
        return result.blob()
      }
    })
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      self.setState({
        image: objectURL,
      })
    }).catch((err) => {
      self.setState({
        error: err,
      })
    });
  }

  render() {
    const { defaultHeight, defaultWidth } = this.props

    if (this.state.image === null && this.state.error === null) {
      return <Spinner width={defaultWidth} height={defaultHeight} />
    }

    if (this.state.error !== null) {
      return <DefaultPhoto width={defaultWidth} height={defaultHeight} />
    }

    const {
      alt,
      className,
    } = this.props

    return React.createElement('img', {
      alt,
      className,
      src: this.state.image
    });
  }
}

LazyImage.propTypes = {
  defaultWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
};

LazyImage.defaultProps = {
  defaultWidth: 60,
  defaultHeight: 60,
};

export default LazyImage
