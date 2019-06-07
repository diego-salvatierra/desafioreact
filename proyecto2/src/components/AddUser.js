import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { RickContext } from '../contexts'
import 'bulma/css/bulma.css'


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
        <div><br></br><br></br> If not, register below:
        <form onSubmit={handleSubmit}>
          <input className='input'
           type="name"
           placeholder="Username"
           name='name'
           value={values['']}
           onChange={handleChange}
          />
          <input className='input'
           type="email"
           placeholder="E-mail"
           name='email'
           value={values['']}
           onChange={handleChange}
          />
          <input className='input'
           type="password"
           placeholder="Password"
           name='password'
           value={values['']}
           onChange={handleChange}
          />
          <button className='button' type='submit'>Register</button>
        </form>
        </div>
      )
}

export default AddUser