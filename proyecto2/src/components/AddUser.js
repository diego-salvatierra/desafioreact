import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { RickContext } from '../contexts'
import 'bulma/css/bulma.css'
import getFirebase from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// Create Firebase instance
const firebaseInstance = getFirebase();
const auth = getAuth();

console.log("firebaseInstance is ", firebaseInstance);
console.log("auth is ", auth);


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
    
      const handleSubmit = async (event) => {
        event.preventDefault()

        const userExists = context.users.find(user => {
          return (            
            user.email === values.email ||
            user.name === values.name
          )
        }
        )

        if (userExists === undefined) {
          // update Firebase
          try {
            if (firebaseInstance) {

              // create user on auth
              const user = await createUserWithEmailAndPassword(auth, values.email, values.password)
              console.log("user", user)

              // create user on firestore
              const db = getFirestore();
              const docRef = await addDoc(collection(db, "users"), {
                  name: values.name, email: values.email, favoriteChars: [], favoriteList: []
                }
              );
              console.log("written with id ", docRef.id);
              alert("Successfully added to Firestore!");
              alert(`Welcome ${values.name}!`);
            }
          } 
          catch (error) {
            console.log("error in signup", error);
            alert(error.message);
          }

          // update context
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

      // main render
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