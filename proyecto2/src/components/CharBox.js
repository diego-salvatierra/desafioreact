import React from 'react'
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CharBox = props => {
    const favoriteChars = props.loggedIn.favoriteChars
    if (favoriteChars.length === 0) {
        console.log("empty")
        return (
            <div>  
            </div>
        )
    }
    for (var i = 0; i < favoriteChars.length; i++) {
        if (props.user.name !== props.loggedIn.name) {
            if (props.user.favoriteChars.includes(favoriteChars[i])) {
                return (
                    <div className='box '>
                        <div>
                            <FontAwesomeIcon icon='heart'/>
                        </div>
                        <div>
                        {props.user.name} has similar tastes in characters!
                        </div>   
                    </div>
                )
            }
        }
    }
    return (
        <div>      
        </div>
    )           
}

export default CharBox