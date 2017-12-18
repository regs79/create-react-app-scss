import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './BasicTable.scss'
import { createTableInfoData } from 'utils/table'

export const BasicTable = ({
  columns,
  data,
}) => {
  const tableData = createTableInfoData({ column: columns, row: data})
  const tableClasses = cn('table', styles.table)
  const renderRows = () => {
    const rows = []
    for (var i = 0; i < tableData.length; i++) {
      rows.push(
        React.createElement("tr", { key: i },
        React.createElement("th", { scope: "row" }, `${tableData[i].label}`),
        React.createElement("td", {}, `${tableData[i].value}`)
      ))
    }
    return rows
  }

  return React.createElement('div', { className: styles.container },
         React.createElement('table', { className: tableClasses },
         React.createElement('tbody', {}, renderRows())))
}

BasicTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.object
}

BasicTable.defaultProps = {
  columns: [],
  data: {},
}

export default BasicTable
