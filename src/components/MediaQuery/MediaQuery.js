import React from 'react'
import Responsive from 'react-responsive';
import PropTypes from 'prop-types'

export const MediaQuery = ({ ...rest, children }) => {
  const gridGreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  }
  for (var variable in rest) {
    if (rest.hasOwnProperty(variable)) {
      const grid = {
        up: {
          minWidth: gridGreakpoints[rest[variable]],
        },
        down: {
          maxWidth: gridGreakpoints[rest[variable]],
        },
      }
      return (
        <Responsive {...grid[variable]}>
          {React.cloneElement(children)}
        </Responsive>
      );
    }
    return React.cloneElement(children)
  }
}

MediaQuery.propTypes = {
};

export default MediaQuery
