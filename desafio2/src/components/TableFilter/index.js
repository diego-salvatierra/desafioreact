import React from 'react'

// creates input field to filter characters
const TableFilter = props => {
  const { placeHolder, filterText, handleChange } = props

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder={placeHolder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  )
}

export default TableFilter
