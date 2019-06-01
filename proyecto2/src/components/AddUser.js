import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { RickContext } from '../contexts'


const AddUser = () => {
    const context = useContext(RickContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
      })
    
      const handleChange = (event) => {
        const {
          name,
          value
        } = event.target
    
        setValues({
          ...values,
          [name]: value
        })
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()

        const userExists = context.users.find(user => {
          return (            
            user.email === values.email ||
            user.name === values.name
          )
        }
        )

        if (userExists === undefined) {
          context.addUsers(
            [
              ...context.users,
             {
              name: values.name,
              password: values.password,
              email: values.email
             }
            ]
          )
        }

        else {
          alert('Username or E-mail is already registered!')
        }
        
        console.log("users are now ", context.users)
      }

      return (
        <form onSubmit={handleSubmit}>
          <input
           type="name"
           placeholder="Username"
           name='name'
           value={values['']}
           onChange={handleChange}
          />
          <input
           type="email"
           placeholder="E-mail"
           name='email'
           value={values['']}
           onChange={handleChange}
          />
          <input
           type="password"
           placeholder="Password"
           name='password'
           value={values['']}
           onChange={handleChange}
          />
          <button type='submit'>Register</button>
        </form>
      )
}

export default AddUser