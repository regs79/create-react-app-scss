/* eslint-disable */
import React from 'react'
import svg from './Spinner.svg'

const Spinner = ({
  minHeight,
}) => {

  const inlineStyles = {
    minHeight,
  }

  return (
    <div className="loader">
      <div className="loading">
        <img src={svg} alt="loading spinner" />
      </div>
    </div>
  );
}

export default Spinner
