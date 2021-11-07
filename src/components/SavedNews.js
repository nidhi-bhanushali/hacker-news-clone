import React , { useState } from 'react'
import { getFromLocalStorage } from '../constants'
import Articles from './Articles'

const SavedNews = () => {

    const [savedArticles , ] = useState(getFromLocalStorage())

    return (
        <div>
            {savedArticles && savedArticles.map(item => <Articles item = {item} key = {item}/>)}
        </div>
    )
}

export default SavedNews
