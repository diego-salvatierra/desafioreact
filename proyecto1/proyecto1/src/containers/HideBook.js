import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showBook } from '../redux/actions'

// Container that takes state.filterName and checks if it matches state.books[id].name. 
//If it matches, triggers a SHOW_BOOK action on state.books[id]

/*const HideBook = (props) => (

)

const mapStateToProps = (state) => {
    console.log("Hide Book running", state)
    return {
      books: state.books
    }
  }

export default connect(mapStateToProps)(HideBook) */