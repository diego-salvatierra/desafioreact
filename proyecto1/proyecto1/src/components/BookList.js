import React from 'react'
import BookRow from './BookRow'
import 'bulma/css/bulma.css'


const BookList = ({ books, modalClass, onRead, killBook, changeBook }) => (
    <ul className='columns is-multiline'>
        {books.map((book, index) => (
            <div className='column is-narrow is-offset-1'>
            <BookRow key={index} {...book} 
            onRead={() => onRead(index)} 
            killBook={() => killBook(index)} 
            changeBook={() => changeBook(index)} 
            modalClass={modalClass}
            />
            </div>
        ))}
        {console.log("books connected are ", books)}
    </ul>
)

export default BookList