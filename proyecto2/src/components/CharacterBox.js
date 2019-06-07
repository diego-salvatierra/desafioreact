import React from 'react'
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CharacterBox = props => {
    if (props.favoriteList.includes(props.character.id)) { // if favorite
        return (
            <div className='box '>
                    <div>
                        <FontAwesomeIcon icon='heart'/>
                    </div>
                    <div>
                    {props.character.name}
                    </div>
                    <img src={props.character.image}/>
                <button className="button is-danger is-rounded" onClick={() => props.removeFavorite(props.character.id)}>Remove from favorites</button>
            </div>
        )
    }
    else { // if not favorite
        return (
            <div className='box'>
                    <div>
                    {props.character.name}
                    </div>
                    <img src={props.character.image}/>
                <button className="button is-success is-rounded" onClick={() => props.makeFavorite(props.character.id)}>Add to favorites</button>
            </div>
        )
    }
    
}

export default CharacterBox