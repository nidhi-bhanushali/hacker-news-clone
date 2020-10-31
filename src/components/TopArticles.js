import React , {useEffect , useState} from 'react'
import { getTopArticles } from './apis';

const TopArticles = ({item}) => {
    const [topArticle , setTopArticle] = useState([]);
    useEffect(() => {
        getTopArticles(item).then(data=> data && data.url && setTopArticle(data));    
    }, [])
    return (
           <div className = 'card'>
                       <h4><a href = {topArticle.url}>{topArticle.title}</a></h4>
                       <p className = "dark-color">{topArticle.score} points by <span className = 'dark-color'>{topArticle.by} | </span>
                       <span className = 'dark-color'>{topArticle.descendants} </span>comments</p>
                   </div>
    )
}

export default TopArticles