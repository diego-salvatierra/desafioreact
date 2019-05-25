import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css';
import AddBook from '../AddBook';
import BookList from '../../components/BookList'
import BookFilters from '../../components/BookFilters';
import ListView from '../ListView'
import HideBook from './../HideBook'

//import bookAdd from '../../hooks/bookAdd'

function MainContainer (props) {

  console.log("props in the container are ", props)

  return (
    <div className="index">
    <BookFilters/>
    <ListView/>
    <AddBook/>    
    
    </div>
  )
  }

/*const mapStateToProps = state => {
  console.log("state is confusing ", state)
  return {
    books: state.books,
    bookAdd: state.bookAdd
  }
}*/


/*const mapDispatchToProps = dispatch => {
  return {
    onBookClick
  }
}*/

//export default connect(mapStateToProps)(BookList)
export default MainContainer
