import React from 'react'
import { editBook, launchEdit } from '../redux/actions'
import { connect } from 'react-redux'
import EditBookForm from '../components/EditBookForm'

let input

const mapDispatchToProps = dispatch => {
  return {
    editBookInfo: (name, year, author, description) => {
      dispatch(editBook(name, year, author, description))
    },
    editID: (index) => {
      dispatch(launchEdit(index))
    }
  }   
}

const EditBook = connect(null, mapDispatchToProps)(EditBookForm)

export default EditBook