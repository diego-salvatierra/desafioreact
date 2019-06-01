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
import LoginForm from './components/LoginForm'
import AddUser from './components/AddUser';


library.add(faHeart)

// TODO 
/// Connect API DONE
/// Episodes list DONE
/// Episode item DONE
/// Add favorite DONE
/// Delete favorite DONE
/// See more

const App = props => {

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
      console.log("episode data is ", response.data.results)

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

    console.log("infoPage is now ", epPage)

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
       console.log("character data is ", response.data.results)
 
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

      console.log("infoPage is now ", charPage)

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

  function makeFavorite (id) {
    //console.log("id is ", id)
    setFavorite({type: 'add', id: id})
    console.log("favorite list after adding is ", favoriteList)
  }
  
  function removeFavorite (id) {
    console.log("attempting to remove ", id)
    setFavorite({type: 'remove', id: id})
    console.log("favorite list after subtracting ", favoriteList)
  } 

  // Functions (actions) for adding favorite characters

  const [favoriteChars, setFavoriteChar] = useReducer(addFavorite, [])

  function makeFavoriteChar (id) {
    //console.log("id is ", id)
    setFavoriteChar({type: 'add', id: id})
    console.log("favorite list after adding is ", favoriteChars)
  }
  
  function removeFavoriteChar (id) {
    console.log("attempting to remove ", id)
    setFavoriteChar({type: 'remove', id: id})
    console.log("favorite list after subtracting ", favoriteChars)
  }

  // Set up login variables

  const [loggedIn, setLoggedIn] = useState(null) 

  const [users, addUsers] = useState([
     {
      name: 'Diego',
      password: '910440',
      email: 'diegosalva.ds@gmail.com'
      },
      {
      name: 'Mische',
      password: '710999',
      email: 'mischekang@gmail.com'
      }]
  )

  // Initial state using Context

  const rickContext = {
    episodes,
    characters,
    makeFavorite,
    removeFavorite,
    makeFavoriteChar,
    removeFavoriteChar,
    favoriteList,
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

  console.log("rickContext is ", rickContext)

  // Main Render

  return (
    <RickContext.Provider value = {rickContext}>
      <div className="App">
       <header className="App-header">
        <LoginForm/>
        <Router>
          
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item">
              <Link to='/' className="button is-primary">HOME</Link> 
              </a>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            {loggedIn && 
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  <Link to='/episodes/' className="button is-info">Episodes</Link> 
                </a>
                <a className="navbar-item">
                  <Link to='/characters/' className="button is-info">Characters</Link> 
                </a>
              </div>
            </div> }
          </nav>

          <Route path='/episodes/' component={ListEpisodes} /> 
          <Route path='/characters/' component={ListCharacters} /> 
        </Router> 
        <AddUser/>       
       </header>        
      </div>
    </RickContext.Provider>
  );
}

export default App
