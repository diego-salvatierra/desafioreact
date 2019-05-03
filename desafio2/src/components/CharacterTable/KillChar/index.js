import React from 'react'

// Renders kill button
const KillChar = ({ name, handleKill, killName }) => {   
    return (
        <div id={name} onClick={handleKill}>☠ Kill</div>
    )   
}

export default KillChar

