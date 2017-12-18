import PropTypes from 'prop-types'

const BasicTable = {
  propTypes: {
    columns: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.object
  },
  defaultProps: {
    columns: [],
    data: {},
  },
}

export default BasicTable
