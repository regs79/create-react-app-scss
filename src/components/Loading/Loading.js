import React from 'react'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
// import styles from './Loading.scss'

export const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
}

Loading.propTypes = {
};

Loading.defaultProps = {
};

export default Loading
