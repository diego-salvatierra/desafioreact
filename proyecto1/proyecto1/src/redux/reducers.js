// Reducer que recibe y usa el action
import React, { Component , useState } from 'react';

import { ADD_BOOK, SET_READ_STATUS, SHOW_BOOK, CHANGE_FILTER, DELETE_BOOK, EDIT_BOOK, LAUNCH_EDIT } from './actions'
// import boundAddBook from './actions'

/* state format
{
  books: [
    {
      name: 'I am a book'
      read: true
      year: 'number'
      author: 'name'
      notable characters: []
    },
    {
      name: 'I am another book'
      read: false
      year: 'number'
      author: 'name'
      notable characters: []

    }
  ]
  filters: {
    name: '',
    year: '',
    author: ''
  }

  bookAdd: ''
    
} */

// Add book reducer

// returns the initial state of the app

const initialState = {
  books: [],
  filterName: '',
  bookAdd: 'hello world',
  editID: ''
}



// reducer that handles the actions
// Once it's working, decompose it: https://redux.js.org/basics/reducers TODO
function bookApp(state = initialState, action) {

    // useState hooks for form state management

    switch(action.type) {

      case ADD_BOOK:
        return Object.assign({}, state, {
          books: [
            ...state.books,
           {
            id: action.id,
            name: action.name,
            year: action.year,
            author: action.author,
            description: action.description,
            read: false,
            show: true
           }
          ]
        })

        // how to bring state ID back to ''
      case EDIT_BOOK:
      console.log("index is", )
      return Object.assign({}, state, {
        books: state.books.map((book, index) => {
          if (index === state.editID) {
            state.editID = ''
            console.log("book to edit is ", book)
            return Object.assign({}, book, {
              name: action.name,
              year: action.year,
              author: action.author,
              description: action.description,
          })
        }})
      })

      case SET_READ_STATUS:
        return Object.assign({}, state, {
          books: state.books.map((book, index) => {
            if (index === action.index) {
              return Object.assign({}, book, {
                read: true
              })
            }
            return book
          })          
        })

      case LAUNCH_EDIT:
      console.log("action.index is ", action.index)
      return Object.assign({}, state, {
        editID: action.index          
      })

      case SHOW_BOOK:
        return Object.assign({}, state, {
          books: state.books.map((book, filterName) => {
            console.log("state in showBook is ", book.name)
            console.log("action.name ", action.name)
            if (book.name.includes(filterName) === false) {
              console.log(book.name, " has been hidden!")
              return Object.assign({}, book, {                
                show: false                
              })
            }
            else {
              console.log(book.name, " has been revealed!")
              return Object.assign({}, book, {
                show: true
              })
            }
            return book
          })          
        })

      case CHANGE_FILTER:
        return Object.assign({}, state, {
          books: state.books.map((book) => {
            console.log("properties to filter are ", book)
            console.log("action.name ", action.name)
            var properties = book.name.concat(book.year, book.author, book.description) 
            if (properties.includes(action.name) === false) {
              console.log(book.name, " has been hidden!")
              return Object.assign({}, book, {                
                show: false                
              })
            }
            else {
              console.log(book.name, " has been revealed!")
              return Object.assign({}, book, {
                show: true
              })
            }
            return book
          })          
        })

        case DELETE_BOOK:
        //console.log("index is ", index)
        return Object.assign({}, state, {
          books: [
            ...state.books.slice(0, action.index),
            ...state.books.slice(action.index + 1)
            ]            
          })         
        /*return Object.assign({}, state, {
          filterName: action.name
        })*/

      default:
        console.log("reducer has changed state to ", state)
        return state  
    }
  }

export default bookApp