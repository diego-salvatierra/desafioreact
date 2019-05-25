import React from 'react'
import { ShireContext } from '../../contexts'

// creates input field to filter characters
function TableFilter() {
  //const { placeHolder, filterText, handleChange } = props
  return (
    <ShireContext.Consumer>
      {props => (
      <div className="search-input">
      <input
        type="text"
        placeholder="Input search..."
        value={props.filterText}
        onChange={props.handleInputChange}
      />
      </div>
      )}
    </ShireContext.Consumer>
  )
}

export default TableFilter
