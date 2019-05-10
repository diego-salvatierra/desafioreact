import React from 'react'

// Renders ring button conditionally on whether ring has been used
const UseRing = ({ name, handleRing, ringName }) => {   
    if (!ringName) {
        return (
            <div id={name} onClick={handleRing}>💍 Use Ring</div>
        )   
    }
    else {
        return (
            <div></div>
        )
    }
}


export default UseRing

