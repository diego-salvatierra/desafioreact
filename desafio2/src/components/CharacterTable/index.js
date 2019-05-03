import React from 'react'
import UseRing from './UseRing';
import KillChar from './KillChar';  

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
          <KillChar name={props.name} handleKill={props.handleKill} killName={props.killName}/>
        </div>
      </td>
    </tr>
  )
}

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
  )
}




// Generates the main table

const CharacterTable = ({characters, deadCharacters, handleRing, ringName, handleKill, killName}) => (
    <table className="characters-table">
        <tbody>
          <tr className="character-row">
            <th>Name</th>
            <th>Race</th>
            <th>Age</th>
            <th>Weapon</th>
            <th></th>
          </tr>
          {characters.map(({name, race, age, weapon}, index) => (
            <CharacterRow 
            key={index} 
            name={name} 
            race={race} 
            age={age} 
            weapon={weapon} 
            handleRing={handleRing} 
            ringName={ringName}
            handleKill={handleKill} 
            killName={killName}/>
          ))}
          {deadCharacters.map(({name, race, age, weapon}, index) => (
            <DeadCharacterRow             
            key={index} 
            name={name} 
            race={race} 
            age={age} 
            weapon={weapon} 
            handleRing={handleRing} 
            ringName={ringName}
            handleKill={handleKill} 
            killName={killName}/>
          ))}
        </tbody>
    </table>
)

export default CharacterTable