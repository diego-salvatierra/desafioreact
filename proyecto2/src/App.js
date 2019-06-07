import React, { useEffect , useReducer, useState } from 'react';
import './App.css';
import axios from 'axios'
import { RickContext } from './contexts'
import ListEpisodes from './components/ListEpisodes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import addFavorite from './reducers/addFavorite'
import 'bulma/css/bulma.css'
import ListCharacters from './components/ListCharacters'
import SameLikes from './components/SameLikes'
import LoginForm from './components/LoginForm'
import AddUser from './components/AddUser';


library.add(faHeart)

// TODO 
/// Favorites list per user DONE
/// Route if not logged in 
/// Add same favorites page DONE
/// Add photos
/// CSS for login forms
/// Modal for new user
/// Upload to gh-pages DONE

const App = props => {

    // Set up login variables

    const [loggedIn, setLoggedIn] = useState(null) 

    const [users, addUsers] = useState([
       {
        name: 'Diego',
        password: '910440',
        email: 'diegosalva.ds@gmail.com',
        favoriteList: [],
        favoriteChars: []
        },
        {
        name: 'Mische',
        password: '710999',
        email: 'mischekang@gmail.com',
        favoriteList: [3, 5],
        favoriteChars: [4, 5]
        }]
    )

  // Connect episodes to API

  const [episodes, setEpisodes] = useState([])

  const [epPage, setEpPage] = useState({
    currentPage: 1,
    next: '',
    maxPage: null,
  })

  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/episode/')

      setEpisodes(response.data.results)

      setEpPage({
        ...epPage,
        next: response.data.info.next,
        maxPage: response.data.info.pages
      })
    }

    getApi()
  }, [])

  const loadMoreEps = async () => {

    const { next, currentPage } = epPage


    const response = await axios.get(next)

    setEpisodes([...episodes, ...response.data.results])

    setEpPage({
      ...epPage,
      next: response.data.info.next,
      currentPage: currentPage + 1
    })
  } 

  // Connect characters to API

   // Link episodes to API
   const [characters, setCharacters] = useState([])

   const [charPage, setCharPage] = useState({
      currentPage: 1,
      next: '',
      maxPage: null,
    })
 
   useEffect(() => {
     const getApi = async () => {
       const response = await axios.get('https://rickandmortyapi.com/api/character/')
 
       setCharacters(response.data.results)
 
       setCharPage({
         ...charPage,
         next: response.data.info.next,
         maxPage: response.data.info.pages
       })
     }
 
     getApi()
   }, [])

    const loadMoreChars = async () => {

      const { next, currentPage } = charPage

      const response = await axios.get(next)

      setCharacters([...characters, ...response.data.results])

      setCharPage({
        ...charPage,
        next: response.data.info.next,
        currentPage: currentPage + 1
      })
    }

  // Functions (actions) for adding favorite episodes

  const [favoriteList, setFavorite] = useReducer(addFavorite, [])

  // function for updating favorite episode list for logged in user
  function favoriteUpdate () {
    // update users' favorite list
    addUsers(users.map((user) => {
      if (loggedIn.name === user.name) {
        user.favoriteList = favoriteList
      }
      return user
    }
    ))
  }

   // Compare same likes

   const [sameLikes, setSameLikes] = useState([])

   function likeUpdate (id) {
     setSameLikes(users.map((user) => {
       if (user.favoriteList.includes(id) && (user.name !== loggedIn.name)) {
         user = user.name
       }
     }
     )
   )}

  // Function to add a favorite
  function makeFavorite (id) {
    setFavorite({type: 'add', id: id})
    favoriteUpdate()
    likeUpdate(id)
  }
 
   // Function to remove a favorite
  function removeFavorite (id) {
    setFavorite({type: 'remove', id: id})
    favoriteUpdate()
  } 

  // Functions (actions) for adding favorite characters

  const [favoriteChars, setFavoriteChar] = useReducer(addFavorite, [])

  // function for updating favorite character list for logged in user
  function favoriteCharUpdate () {
    /*// identify logged in user
    const logInUser = users.find(user => {
      return (            
        user.name === loggedIn.name)
    })*/

    // update users' favorite list
    addUsers(users.map((user) => {
      if (loggedIn.name === user.name) {
        user.favoriteChars = favoriteChars
      }
      return user
    }
    ))
  }

  // Functions for adding and removing favorite chars
  function makeFavoriteChar (id) {
    setFavoriteChar({type: 'add', id: id})
    favoriteCharUpdate()
  }
  
  function removeFavoriteChar (id) {
    setFavoriteChar({type: 'remove', id: id})
    favoriteCharUpdate()
  }


  // Initial state using Context

  const rickContext = {
    episodes,
    characters,
    makeFavorite,
    removeFavorite,
    makeFavoriteChar,
    removeFavoriteChar,
    favoriteList,
    sameLikes,
    favoriteChars,
    loadMoreEps,
    loadMoreChars,
    epPage,
    charPage,
    loggedIn,
    setLoggedIn,
    users,
    addUsers
  }


  // Main Render

  return (
    <RickContext.Provider value = {rickContext}>
      <div className="App">
       <header className="App-header">
        <Router>
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              {!loggedIn &&
              <a className="navbar-item">
              <Link to='/login' className="button is-primary">LOG IN</Link> 
              </a>}
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            {loggedIn && 
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  <Link to='/login/' className="button is-danger" onClick={() => setLoggedIn(null)}>LOG OUT</Link> 
                </a>
                <a className="navbar-item">
                  <Link to='/episodes/' className="button is-info">Episodes</Link> 
                </a>
                <a className="navbar-item">
                  <Link to='/characters/' className="button is-info">Characters</Link> 
                </a>
                <a className="navbar-item">
                  <Link to='/favorites/' className="button is-info">Similar tastes</Link> 
                </a>
              </div>
            </div> }
          </nav>
          <Route path='/login' component={LoginForm}/> 
          <Route path='/login' component={AddUser}/> 
          <Route path='/episodes/' component={ListEpisodes} /> 
          <Route path='/characters/' component={ListCharacters} /> 
          <Route path='/favorites/' component={SameLikes} /> 
        </Router> 
       </header>        
      </div>
    </RickContext.Provider>
  );
}

export default App
