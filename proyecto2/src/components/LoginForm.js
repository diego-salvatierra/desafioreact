import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { RickContext } from '../contexts'


const LoginForm = () => {
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
        const logIn = context.users.find(user => {
          return (            
            user.email === values.email &&
            user.password === values.password
          )
        }
        )

        //if log in successful
        if (logIn) {
          context.setLoggedIn(logIn)
          alert('Login successful!')
        }

        //if log in not successful
        else {
          alert('Email and password do not match. Try again!')
          context.setLoggedIn(null)
        }

        console.log("State is now", context)
        // login(values.email, values.password)
      }

      return (
        <form onSubmit={handleSubmit}>
          <input
           type="email"
           name='email'
           value={values['']}
           onChange={handleChange}
          />
          <input
           type="password"
           name='password'
           value={values['']}
           onChange={handleChange}
          />
          <button type='submit'>Login</button>
        </form>
      )
}

export default LoginForm