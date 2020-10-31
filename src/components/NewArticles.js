import React , {useEffect , useState} from 'react'
import { getNewArticles } from './apis';

const NewArticles = ({item}) => {
    const [newArticle , setNewArticle] = useState([]);
    useEffect(() => {
        getNewArticles(item).then(data=> data && data.url && setNewArticle(data));   
        // eslint-disable-next-line 
    }, [])
    return (
           <div className = 'card'>
                       <h4><a href = {newArticle.url}>{newArticle.title}</a></h4>
                       <p className = "dark-color">{newArticle.score} points by <span className = 'dark-color'>{newArticle.by} | </span>
                       <span className = 'dark-color'>{newArticle.descendants} </span>comments</p>
            </div>
    )
}

export default NewArticles
