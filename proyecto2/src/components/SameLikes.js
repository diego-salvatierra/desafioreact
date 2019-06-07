import React, {useContext} from 'react'
import { RickContext } from './../contexts'
import UserBox from './UserBox' 
import CharBox from './CharBox'
import 'bulma/css/bulma.css'
     

const SameLikes = () => {
  const context = useContext(RickContext)
  return (
    <div>
    <div><br/><br/><br/>Users with similar tastes</div>
        <div>In episodes:
        {context.users.map((user, index) => (        
            <div>
            <UserBox key={index} 
            user={user}
            loggedIn={context.loggedIn}/>
            </div>            
        ))}
        </div><br/><br/><br/>
        <div>In characters:
        {context.users.map((user, index) => (
            <div>
            <CharBox key={index} 
            user={user}
            loggedIn={context.loggedIn}/>
            </div>           
        ))}
        </div>
    </div>   
  )
}

export default SameLikes