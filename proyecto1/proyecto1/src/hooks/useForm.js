import React, { useState } from 'react'

const useForm = (callback) => {

    const [values, setValues] = useState('')
   
    // Default values
   //values.name = "hello name"


    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault()
            callback(values.name, values.year, values.author, values.description)
        }
    }

    function handleChange (event) {
        event.persist()
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setValues(values => ({ ...values, [event.target.year]: event.target.value }));
        setValues(values => ({ ...values, [event.target.author]: event.target.value }));
        setValues(values => ({ ...values, [event.target.description]: event.target.value }));
    }

    function handleClear (event) {
        event.persist()
        console.log("CALLED ", event.target.name)
        setValues(values => ({ ...values, [event.target.name]: '' }));
        setValues(values => ({ ...values, [event.target.year]: '' }));
        setValues(values => ({ ...values, [event.target.author]: '' }));
        setValues(values => ({ ...values, [event.target.description]: '' }));
    }

    return {
        handleChange,
        handleSubmit,
        handleClear,
        values
    }
}

export default useForm

   /* // create local state for form values
    const [newName, setNewName] = useState('')

    function handleNewName (value) {
        setNewName(value)
    } */
