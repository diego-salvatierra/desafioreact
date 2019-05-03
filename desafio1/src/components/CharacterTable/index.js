import React from 'react'

// Generates a character row

const CharacterRow = props => {
  console.log("props is")
  console.log(props)
  return (
    <tr className="character-row">
      <td>{props.name}</td>
      <td>{props.race}</td>
      <td>{props.age}</td>
      <td>{props.weapon}</td>
      <td>
        <div className="controls">
          <div>☠ Kill</div>
          <div>💍 Use Ring</div>
        </div>
      </td>
    </tr>
  )
}

// Generates the main table

const CharacterTable = ({characters}) => (
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
            <CharacterRow key={index} name={name} race={race} age={age} weapon={weapon} />
          ))}
        </tbody>
    </table>
)

export default CharacterTable