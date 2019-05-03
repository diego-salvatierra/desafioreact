import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableFilter from './components/TableFilter'
import UseRing from './components/CharacterTable/UseRing'
import CharacterTable from './components/CharacterTable'

let characters = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑'},
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔'},
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹'},
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒'},
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡'}
]

// Main function

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '', 
      ringName: '',
      killName: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleUseRing = this.handleUseRing.bind(this)
    this.handleKillChar = this.handleKillChar.bind(this)
  }


  handleInputChange (e) {
    this.setState({
      filterText: e.target.value
    })
  }

  // handler for using the ring
  handleUseRing (e) {
    this.setState({
      ringName: e.target.id
    }) 
  }

  // handler for killing a character
  handleKillChar (e) {
    this.setState({
      killName: [ ...this.state.killName, e.target.id]
    }) 
  }
  
  render() {

  // define variables for the handlers
    const {filterText} = this.state

    const {ringName} = this.state

    const {killName} = this.state

  // define lists of characters
    let filteredCharacters = characters

    let filteredCharactersDead = []

    // Filters characters based on input text
    if (filterText) { 
      filteredCharacters = characters.filter(character => {
        return character.name.includes(filterText)
      })
    }

    // Filters characters based on ring click
    if (ringName) { 
      filteredCharacters = filteredCharacters.filter(character => {
        return character.name !== ringName
      })
    }

    // Creates the list of 'dead' characters
    var deadCharName = '' // store character name
    var deadChar = '' // store character row
    // puts the dead characters in order of death
    for (var i = 0; i < killName.length; i++) {
      deadCharName = killName[i]
      deadChar = filteredCharacters.filter(character => {
        return deadCharName.includes(character.name)
      })
      deadChar = deadChar[0]
      filteredCharactersDead.push(deadChar)
    }
    // Fix undefined dead list bug
    if (typeof filteredCharactersDead[0] === 'undefined') {
      filteredCharactersDead = []
    }
    console.log("filteredCharactersDead are ", filteredCharactersDead)

  // Modifies the list of 'living' characters
    filteredCharacters = filteredCharacters.filter(character => {
      return !killName.includes(character.name)
    })
    if (typeof filteredCharacters[0] === 'undefined') {
      filteredCharacters = []
    }
    console.log("filteredCharacters are ", filteredCharacters)

    // Main render after characters have been filtered
    return (
  <div className="App">
    <header className="App-header">
    <h2>Fellowship of the Ring</h2>
    <div className="container">
      <TableFilter // Creates the table filter box
      filterText={filterText} 
      handleChange={this.handleInputChange}
      placeHolder='Input search...'/>
      {/*renders table*/}
      {(filteredCharacters.length + filteredCharactersDead.length) > 0 && 
      <CharacterTable 
      characters={filteredCharacters}
      deadCharacters={filteredCharactersDead}
      handleRing={this.handleUseRing}
      ringName={ringName}
      handleKill={this.handleKillChar} 
      killName={killName}/> } 
      {/*renders table with no hero */}
      {filteredCharacters.length === 0 && filteredCharactersDead.length === 0 && <div>No heroes....</div> } 
    </div>
    </header>
  </div>
    )
  }
} 



export default App
