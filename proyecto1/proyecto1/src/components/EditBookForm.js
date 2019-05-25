import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import 'bulma/css/bulma.css'


let input

function EditBookForm ({editBookInfo, editID, modalClass}) {

  console.log("editBookInfo is ", editBookInfo)
  console.log("modalClass is ", modalClass)


  // Uses the useForm hook passing in the addNewBook as callback
  const {values, handleChange, handleSubmit, handleClear} = useForm(editBookInfo)

  return (
  <div className={modalClass}>
    <div className='modal-background' onClick={() => editID('')}></div>
    <div className='modal-content'>
    <form onSubmit= {(e) => {
            e.preventDefault()
            console.log("input.value is ", e)            
            handleSubmit(e)
        }}>
      <input className='input' name='name' placeholder = 'Name' value = {values.name} onChange = {handleChange} onSubmit = {handleClear}/>
      <input className='input' name='year' placeholder = 'Year' value = {values.year} onChange = {handleChange}/>
      <input className='input' name='author' placeholder = 'Author' value = {values.author} onChange = {handleChange}/>
      <input className='input' name='description' placeholder = 'Description' value = {values.description} onChange = {handleChange}/>
      <input className='button' type='submit' value='Submit changes'/>
      {/*<button className='button' value='Reset Form' onClick={handleClear}/>*/}
    </form>  
    </div>
    <button className="modal-close is-large" aria-label="close" onClick={() => editID('')}></button>
  </div>    
  )}

export default EditBookForm

/*ref={node => {
        input = node 
      }} */