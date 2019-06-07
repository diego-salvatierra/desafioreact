import React from 'react'
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserBox = props => {
    const favoriteList = props.loggedIn.favoriteList
    if (favoriteList.length === 0) {
        console.log("empty")
        return (
            <div>  
            </div>
        )
    }
    for (var i = 0; i < favoriteList.length; i++) {
        if (props.user.name !== props.loggedIn.name) {
            if (props.user.favoriteList.includes(favoriteList[i])) {
                return (
                    <div className='box '>
                        <div>
                            <FontAwesomeIcon icon='heart'/>
                        </div>
                        <div>
                        {props.user.name} has similar tastes in episodes!
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

export default UserBox