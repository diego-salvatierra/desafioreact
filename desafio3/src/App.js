import React, { Component , useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TableFilter from './components/TableFilter'
import UseRing from './components/CharacterTable/UseRing'
import GiveRing from './components/CharacterTable/GiveRing'
import CharacterTable from './components/CharacterTable'
import { ShireContext } from './contexts' 


const characters = {
  '1': { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑'},
  '2': { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔'},
  '3': { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹'},
  '4': { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒'},
  '5': { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡'}
}


// To do

/// fix click bug (reset array?) DONE
/// add context DONE
/// add character form TODO

// Main function

function App () {

  const [filterText, setFilterText] = useState('')
  const [ringName, setRingName] = useState('')
  const [charID, setCharID] = useState(['1', '2', '3', '4', '5'])
  const [killName, setKillName] = useState([])


  // hanldes search input
  function handleInputChange (e) {
    setFilterText(e.target.value)
  }

  // handler for using the ring
  function handleUseRing (e) {
    setRingName(e.target.id)
  }

  // handler for giving back the ring
  function handleGiveRing (e) {
    setRingName('')
  }

  // handler for killing a character
  function handleKillChar (e) {
    setKillName([...killName, e.target.id]) 
  }
  
  // maps characters onto an array of objects
  let filteredCharacters = charID.map(id => characters[id])

  let filteredCharactersDead = []

  /* this.setState({
      heroes: {
        [id]: {
          ...heroes[id],
          status: 'dead'
        }
      }
    
    */
  
  // define lists of characters


    // Filters characters based on input text
    if (filterText) { 
      filteredCharactersDead = []
      filteredCharacters = filteredCharacters.filter(character => {
        return character.name.includes(filterText)
      })
    }

    // Filters characters based on ring click
    if (ringName) { 
      console.log("ringname is now ", ringName)
      filteredCharacters = filteredCharacters.filter(character => {
        return character.name !== ringName
      })
    }

    // Creates the list of 'dead' characters
    var deadCharName = '' // store character name
    var deadChar = '' // store character row

    // Generates dead char list with dead characters in order of death
    for (var i = 0; i < killName.length; i++) {
      deadCharName = killName[i]
      deadChar = filteredCharacters.filter(character => {
        return deadCharName.includes(character.name)
      })
      deadChar = deadChar[0]
      // If deadChar is not undefined:
      if (deadChar) {
        filteredCharactersDead.push(deadChar)
      }
    }

  // Modifies the list of 'living' characters
    filteredCharacters = filteredCharacters.filter(character => {
      return !killName.includes(character.name)
    })
    if (typeof filteredCharacters[0] === 'undefined') {
      filteredCharacters = []
    }

    // Creates the context state variable
  const charsContext = {
    characters,
    filterText,
    ringName,
    charID,
    killName,
    handleInputChange,
    handleUseRing,
    handleGiveRing,
    handleKillChar,
    filteredCharacters,
    filteredCharactersDead
  }

    // Main render after characters have been filtered
    return (
  // add the context 
  <ShireContext.Provider value = {charsContext}>
  <div className="App">
    <header className="App-header">
    <h2>Fellowship of the Ring</h2>
    <div className="container">
      
      <TableFilter // Creates the table filter box
      />
      {/*renders table*/}
      {(filteredCharacters.length + filteredCharactersDead.length) > 0 && 
      
      <CharacterTable/> } 
      
      {/*renders table with no hero */}
      {filteredCharacters.length === 0 && filteredCharactersDead.length === 0 && <div>No heroes....</div> } 
      
      <GiveRing  
      giveRing={handleGiveRing} 
      ringName={ringName}/>
      
    </div>
    </header>
  </div>
  </ShireContext.Provider>
    )
  }

export default App
