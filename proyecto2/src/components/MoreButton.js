import React, {useContext} from 'react'
import { RickContext } from './../contexts'
import 'bulma/css/bulma.css'

const MoreButton = ({loadMore, currentPage, maxPage}) => {
    const context = useContext(RickContext)
    return (
        currentPage < maxPage && <button className="button is-light" onClick={loadMore}>Load more</button>
    )
}

export default MoreButton