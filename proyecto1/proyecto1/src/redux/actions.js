// import React from 'react';
// import { dispatch } from 'react-redux'

// Defines the actions and the action creators

// Action types

export const ADD_BOOK = 'ADD_BOOK'

export const SET_READ_STATUS = 'SET_READ_STATUS'

export const ReadStatuses = {
  NOT_READ: 'NOT_READ',
  READ: 'READ'
}

export const SHOW_BOOK = 'SHOW_BOOK'

export const CHANGE_FILTER = 'CHANGE_FILTER'

export const DELETE_BOOK = 'DELETE_BOOK'

export const EDIT_BOOK = 'EDIT_BOOK'

export const LAUNCH_EDIT = 'LAUNCH_EDIT'

// Action creators

let nextID = 0
export function addBook(name, year, author, description) {
    return {
        type: ADD_BOOK,
        id: nextID++,
        name,
        year,
        author,
        description
    }
} 

// Add state item
// Create launchEdit action
// LaunchEdit reducer changes state item
// If state item not empty, show modal


export function editBook(name, year, author, description) {
    return {
        type: EDIT_BOOK,
        name,
        year,
        author,
        description
    }
} 

export function launchEdit(index) {
    return {
        type: LAUNCH_EDIT,
        index
    }
}

export function readBook(index) {
    return {
        type: SET_READ_STATUS,
        index
    }
}

export function showBook(name) {
    return {
        type: SHOW_BOOK,
        name
    }
}

export function deleteBook(index) {
    return {
        type: DELETE_BOOK,
        index
    }
}

export function changeFilterName(name) {
    return {
        type: CHANGE_FILTER,
        name
    }
}

// Dispatchers

// export const boundAddBook = name  => dispatch(addBook(name))

// export default boundAddBook