export const createTableInfoData = ({ column, row }) => {
  if (typeof row !== 'object' && column !== 'object') {
    throw new Error('Invalid Column/Row data')
  }
  const data = []
  try {
    let i = 0
    for (var key in row) {
      if (row.hasOwnProperty(key)) {
        data.push({
          label: column[i],
          value: row[key]
        })
      }
      ++i
    }
  } catch (e) {
    throw new Error(e)
  }
  return data
}
