import React , {useEffect , useState} from 'react'
import Spinner from '../layout/Spinner';
import { getTopArticles } from './apis';
import { addToLocalStorage } from '../constants';
import { useHistory } from 'react-router';

const TopArticles = ({item}) => {
    const { location } = useHistory();
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
                       <div className='flex'>
                       <p className = "dark-color">{topArticle.score} points by <span className = 'dark-color'>{topArticle.by} | </span>
                       <span className = 'dark-color'>{topArticle.descendants} </span>comments</p>
                       {(location.pathname === '/saved') ? <></>:<button className='btn btn-sm btn-primary'  value={topArticle.id} onClick={addToLocalStorage}>Save</button>}
                       </div>
            </div> : <Spinner/>
    )
}

export default TopArticles