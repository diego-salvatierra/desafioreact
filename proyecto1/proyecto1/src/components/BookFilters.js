import React from 'react'
import { showBook } from '../redux/actions'
import { connect } from 'react-redux'
import { changeFilterName } from '../redux/actions'
//import HideBook from './../containers/HideBook'
//import { hideBook } from './../containers/HideBook'

/*function hideIfMatch (props) {
    var nameTest
    for (var i = 0; i < props.books.length; i++) {
        nameTest = props.books[i].name
        console.log("nameTest is ", nameTest)
        props.dispatch(showBook(nameTest))
        /*if (nameTest.includes(props.filterName) === false) { // checks if filter does not contain name
            props.dispatch(showBook(i))
        }
        else {
            props.dispatch(showBook(-1))
        }
    }
}*/

const BookFilters = (props) => (
    <div><input className='input' type='text' placeholder='Filter your books...'  
        onChange={(e) => {
            props.dispatch(changeFilterName(e.target.value))
        }}></input>
    </div>    
)

const mapStateToProps = (state) => {
    return {
        filterName: state.filterName,
        books: state.books
    }
}

export default connect(mapStateToProps)(BookFilters)
