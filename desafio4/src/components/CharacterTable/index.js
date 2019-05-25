import React from 'react'
import UseRing from './UseRing';
import KillChar from './KillChar';  
import { ShireContext } from '../../contexts'

// Generates a character row

const CharacterRow = props => {
  return (
    <tr className="character-row">
      <td>{props.name}</td>
      <td>{props.race}</td>
      <td>{props.age}</td>
      <td>{props.weapon}</td>
      <td>
        <div className="controls">
          <UseRing name={props.name} handleRing={props.handleRing} ringName={props.ringName}/>
          <KillChar name={props.name}/>
        </div>
      </td>
    </tr>
      )}

const DeadCharacterRow = props => {
  return (
    <tr className="deadcharacter-row">
      <td>{props.name}</td>
      <td>{props.race}</td>
      <td>{props.age}</td>
      <td>{props.weapon}</td>
      <td>
        <div className="controls">
        </div>
      </td>
    </tr>
    )}



// Generates the main table

const CharacterTable = () => (
  <ShireContext.Consumer>
    { props => (
    <table className="characters-table">
        <tbody>
          <tr className="character-row">
            <th>Name</th>
            <th>Race</th>
            <th>Age</th>
            <th>Weapon</th>
            <th></th>
          </tr>
          {props.filteredCharacters.map(({name, race, age, weapon}, index) => (
            <CharacterRow 
            key={index} 
            name={name} 
            race={race} 
            age={age} 
            weapon={weapon} 
            handleRing={props.handleUseRing} 
            ringName={props.ringName}
            handleKill={props.handleKillChar} 
            killName={props.killName}
           />
          ))}
          {props.filteredCharactersDead.map(({name, race, age, weapon}, index) => (
            <DeadCharacterRow             
            key={index} 
            name={name} 
            race={race} 
            age={age} 
            weapon={weapon} 
            />
          ))}
        </tbody>
    </table>
    )}
    </ShireContext.Consumer>
  )


export default CharacterTable