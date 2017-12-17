import PropTypes from 'prop-types'

const BasicTable = {
  propTypes: {
    columnLabel: PropTypes.arrayOf(PropTypes.string),
    columnDataValue: PropTypes.object
  },
  defaultProps: {
    columnLabel: [],
    columnDataValue: {},
  },
}

export default BasicTable
