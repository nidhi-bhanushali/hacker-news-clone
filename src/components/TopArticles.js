import React , {useEffect , useState} from 'react'
import Spinner from '../layout/Spinner';
import { getTopArticles } from './apis';

const TopArticles = ({item}) => {
    const [topArticle , setTopArticle] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getTopArticles(item).then(data=> data && data.url && setTopArticle(data)).then(() => setLoading(false));   
        // eslint-disable-next-line 
    }, [])
    return (
            !loading ? 
           <div className = 'card'>
                       <h4><a href = {topArticle.url} target = "_blank" rel="noopener noreferrer">{topArticle.title}</a></h4>
                       <p className = "dark-color">{topArticle.score} points by <span className = 'dark-color'>{topArticle.by} | </span>
                       <span className = 'dark-color'>{topArticle.descendants} </span>comments</p>
            </div> : <Spinner/>
    )
}

export default TopArticles