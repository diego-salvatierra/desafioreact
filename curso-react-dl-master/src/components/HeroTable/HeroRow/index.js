import React from 'react'
import KillHero from './KillHero'


const HeroRow = ({name, race, age, weapon}) => (
  <tr className="character-row">
    <td>{name}</td>
    <td>{race}</td>
    <td>{age}</td>
    <td>{weapon}</td>
    <td>
      <div className="controls">
        <button onClick={KillHero}>☠ Kill</button>
        <div>💍 Use Ring</div>
      </div>
    </td>
  </tr>
)

export default HeroRow
