import { connect } from 'react-redux'
import { readBook, launchEdit } from './../redux/actions'
import { deleteBook } from './../redux/actions'
import BookList from '../components/BookList'

const mapStateToProps = state => {
    console.log("State in ListView is ", state)
    if (state.editID !== '') {
      var className = 'modal is-active'
    }
    else {
      var className = 'modal'
    }
    return {
      books: state.books,
      modalClass: className
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    onRead: id => {
      dispatch(readBook(id))
    },
    killBook: id => {
      dispatch(deleteBook(id))
    },
    changeBook: id => {
      dispatch(launchEdit(id))
    }
  }   
}

const ListView = connect(mapStateToProps, mapDispatchToProps)(BookList)

export default ListView