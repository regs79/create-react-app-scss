import React from 'react'
import PropTypes from 'prop-types'
import infoTablePropsType from 'propTypes/BasicTable'
import cn from 'classnames'
import styles from './BasicTable.scss'
import { createTableInfoData } from 'utils/table'

export const BasicTable = ({
  columnLabel,
  columnDataValue,
}) => {
  const data = createTableInfoData({ column: columnLabel, row: columnDataValue})
  const tableClasses = cn('table', styles.table)
  const renderRows = () => {
    const rows = []
    for (var i = 0; i < data.length; i++) {
      rows.push(
        React.createElement("tr", { key: i },
        React.createElement("th", { scope: "row" }, `${data[i].label}`),
        React.createElement("td", {}, `${data[i].value}`)
      ))
    }
    return rows
  }

  return React.createElement('div', { className: styles.container },
         React.createElement('table', { className: tableClasses },
         React.createElement('tbody', {}, renderRows())))
}

BasicTable.propTypes = infoTablePropsType.propTypes
BasicTable.defaultProps = infoTablePropsType.defaultProps

export default BasicTable
