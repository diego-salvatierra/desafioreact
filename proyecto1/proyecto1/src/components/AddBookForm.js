import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import 'bulma/css/bulma.css'


let input

function AddBookForm ({addNewBook}) {
  console.log("addNewBook is ", addNewBook)

    /*// create local state for form values
    const [newName, setNewName] = useState('')

    function handleNewName (value) {
        setNewName(value)
    } */

    // Uses the useForm hook passing in the addNewBook as callback
    const {values, handleChange, handleSubmit, handleClear} = useForm(addNewBook)

    console.log("values are ", values)

    return (
    <form onSubmit= {(e) => {
            e.preventDefault()
            console.log("input.value is ", e)            
            handleSubmit(e)
            //input.value = ''
        }}>
      <input className='input' name='name' placeholder = 'Name' value= {values.name} onChange = {handleChange} onSubmit = {handleClear}/>
      <input className='input' name='year' placeholder = 'Year' value= {values.year} onChange = {handleChange}/>
      <input className='input' name='author' placeholder = 'Author' value= {values.author} onChange = {handleChange}/>
      <input className='input' name='description' placeholder = 'Description' value= {values.description} onChange = {handleChange}/>
      <input className='button' type='submit' value='Add Book'/>
      {/*<button className='button' value='Reset Form' onClick={handleClear}/>*/}
      </form>    
    )}

export default AddBookForm

/*ref={node => {
        input = node 
      }} */