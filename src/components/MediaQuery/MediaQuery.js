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
  const responsiveProps = []
  for (var variable in rest) {
    if (rest.hasOwnProperty(variable)) {
      const grid = {
        only: {
          minWidth: gridGreakpoints[rest[variable]],
          maxWidth: gridGreakpoints[rest[variable]],
        },
        up: {
          minWidth: gridGreakpoints[rest[variable]],
        },
        down: {
          maxWidth: gridGreakpoints[rest[variable]],
        },
      }
      if (typeof grid[variable] !== 'undefined') {
        responsiveProps.push(grid[variable])
      }
    }
  }
  console.log('{...responsiveProps.reduce(d => d)}', {...responsiveProps.reduce(d => d)})
  return (
    <Responsive {...responsiveProps.reduce(d => d)}>
      {React.cloneElement(children)}
    </Responsive>
  );
}

MediaQuery.propTypes = {
};

export default MediaQuery
