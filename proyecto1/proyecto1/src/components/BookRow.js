import React from 'react'
import BookButton from './BookButton'
import EditBook from './../containers/EditBook'
import 'bulma/css/bulma.css'

const BookRow = ({name, year, author, description, read, show, id, onRead, killBook, changeBook, modalClass}) => {
    console.log("name is ", name)
    // If book is not hidden by filter
    if (show) { 
        return (
            <article className='card'>
                <li className='card-header subtitle'>{name}</li>
                <li>{year}</li>
                <li>{author}</li>
                <li>{description}</li>
                <BookButton className='card-footer' read={read} id={id} onRead={onRead} killBook={killBook} changeBook={changeBook}/>
                <EditBook modalClass={modalClass}/>
            </article>
        )
    }        
    // If book is hidden by filter
    else {
        return (
            <div></div>
        )
    }
}

export default BookRow 