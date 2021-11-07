import React , {useEffect , useState} from 'react'
import Spinner from '../layout/Spinner';
import { getNewArticles } from './apis';
import { addToLocalStorage } from '../constants';

const NewArticles = ({item}) => {
    const [newArticle , setNewArticle] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getNewArticles(item).then(data=> data && data.url && setNewArticle(data)).then(() => setLoading(false));   
        // eslint-disable-next-line 
    }, [])
    return (
            !loading ? 
           <div className = 'card'>
                       <h4><a href = {newArticle.url} target="_blank" rel="noopener noreferrer">{newArticle.title}</a></h4>
                       <div className='flex'>
                       <p className = "dark-color">{newArticle.score} points by <span className = 'dark-color'>{newArticle.by} | </span>
                       <span className = 'dark-color'>{newArticle.descendants} </span>comments</p>
                       <button className='btn btn-sm btn-primary' value={newArticle.id} onClick={addToLocalStorage}>Save</button>
                       </div>
            </div> : <Spinner/>
    )
}

export default NewArticles
