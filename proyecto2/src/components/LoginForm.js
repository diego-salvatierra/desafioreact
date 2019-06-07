import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { RickContext } from '../contexts'
import 'bulma/css/bulma.css'


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

        // login(values.email, values.password)
      }

      return (
        <div> If registered, log in:
        <form onSubmit={handleSubmit}>
          <input className='input'
           type="email"
           name='email'
           placeholder="E-mail"
           value={values['']}
           onChange={handleChange}
          />
          <input className='input'
           type="password"
           name='password'
           placeholder="Password"
           value={values['']}
           onChange={handleChange}
          />
          <button className='button' type='submit'>Login</button>
        </form>
        </div>
      )
}

export default LoginForm