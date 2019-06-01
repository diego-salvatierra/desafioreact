import React from 'react'
import { addBook } from '../redux/actions'
import { connect } from 'react-redux'
import AddBookForm from './../components/AddBookForm'

let input

const mapDispatchToProps = dispatch => {
  return {
    addNewBook: (name, year, author, description) => {
      dispatch(addBook(name, year, author, description))
    }
  }   
}

const AddBook = connect(null, mapDispatchToProps)(AddBookForm)

export default AddBook

//export default AddBook

//console.log("state in AddBook is ", props)


/*const AddBook = ({props}) => {
    // let input

    console.log("state in AddBook is ", props)

return (
    <div>
      <form>
        <input
        type="text"
        placeholder="Add book"
        value={props.bookAdd}
        onSubmit={() => {
  //        dispatch(addBook(props))
          console.log(props)
        }}
      />
      <button type="submit" value="Submit">Add Book</button>
      </form>
      {/*<form 
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addBook(input.value))
          input.value = ''
        }}
      >
        <input 
        ref={node => {
          input = node
        }}
        />
      <button type="submit">Add Book</button>
    </form>}
    </div>
  )
} */