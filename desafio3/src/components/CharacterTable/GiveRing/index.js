import React from 'react'

// Renders return ring button 
const GiveRing = ({ giveRing, ringName }) => { 
    if (!ringName) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <button onClick={giveRing}>💍 Return Precious</button>
        )   
    }
}

export default GiveRing

