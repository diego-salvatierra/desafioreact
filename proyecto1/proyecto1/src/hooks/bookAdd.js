import React, { Component } from 'react';

const bookAdd = (callback, initialValue) => {
  const [bookAdd, bookAddChange] = useState(initialValue)
    
  function handleAddBook (e) {
    bookAddChange(e.target.value)
  }
}

export default bookAdd 
