import React, {useContext} from 'react'
import { RickContext } from './../contexts'
import EpisodeBox from './EpisodeBox' 
import MoreButton from './MoreButton'

const ListEpisodes = () => {
    const context = useContext(RickContext)
    return (
            <div>
                <div><br/><br/><br/></div>
            {context.episodes.map((episode, index) => (
                <EpisodeBox key={index} 
                episode={episode} 
                makeFavorite={context.makeFavorite} 
                removeFavorite={context.removeFavorite} 
                favoriteList={context.favoriteList}/>
            ))}
            <MoreButton loadMore={context.loadMoreEps} 
            currentPage={context.epPage.currentPage} 
            maxPage={context.epPage.maxPage}/>
            </div>      
        )
}

export default ListEpisodes
