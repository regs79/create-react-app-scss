/* eslint-disable */
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
  return (
    <Responsive {...responsiveProps.reduce(d => d)}>
      {React.createElement('div', {} ,
        React.Children.map(children, (child) => React.cloneElement(child))
      )}
    </Responsive>
  );
}

MediaQuery.propTypes = {
};

export default MediaQuery
