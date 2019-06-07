import React from 'react'
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EpisodeBox = props => {
    if (props.favoriteList.includes(props.episode.id)) { // if favorite
        return (
            <div className='box '>
                    <div>
                        <FontAwesomeIcon icon='heart'/>
                    </div>
                    <div>
                    {props.episode.name}
                    </div>   
                <button className="button is-danger is-rounded" onClick={() => props.removeFavorite(props.episode.id)}>Remove from favorites</button>
            </div>
        )
    }
    else { // if not favorite
        return (
            <div className='box'>
                    <div>
                    {props.episode.name}
                    </div>
                <button className="button is-success is-rounded" onClick={() => props.makeFavorite(props.episode.id)}>Add to favorites</button>
            </div>
        )
    }
    
}

export default EpisodeBox