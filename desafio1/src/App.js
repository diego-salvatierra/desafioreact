import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableFilter from './components/TableFilter'
import CharacterTable from './components/CharacterTable'

const characters = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
]

// Main function

class App extends Component {
  /*constructor (props) {
    super(props)
    this.state = {
      filterText: ''
    }

    this.handleInputChange
  }*/
  
  render() {
    return (
  <div className="App">
    <header className="App-header">
    <h2>Fellowship of the Ring</h2>
    <div className="container">
      <TableFilter placeHolder = "search hero" />
      <CharacterTable characters = {characters}/>
    </div>
    </header>
  </div>
    )
  }
} 



export default App
