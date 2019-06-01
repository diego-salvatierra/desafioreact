import React, {useContext} from 'react'
import { RickContext } from '../contexts'
import CharacterBox from './CharacterBox' 
import MoreButton from './MoreButton'

const ListCharacters = () => {
    const context = useContext(RickContext)
    return (
            <div>
                <div><br/><br/><br/></div>
            {console.log("props are ", context)}
            {context.characters.map((character, index) => (
                <CharacterBox key={index} 
                character={character} 
                makeFavorite={context.makeFavoriteChar} 
                removeFavorite={context.removeFavoriteChar} 
                favoriteList={context.favoriteChars}/>
            ))}
            <MoreButton loadMore={context.loadMoreChars} 
            currentPage={context.charPage.currentPage} 
            maxPage={context.charPage.maxPage}/>
            </div>      
        )
}

export default ListCharacters
