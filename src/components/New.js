import axios from 'axios';
import ReactDOM from 'react-dom';
import React , { useState , useEffect , memo} from 'react'
import NewArticles from './NewArticles';
import { useInfiniteScroll } from './useInfiniteScroll';
// import Top from './Top';

//  react-hooks/exhaustive-deps
const New = () => {

    let [newArticlesId , setNewArticlesId] =  useState([]);
    let [newArticle , setNewArticle] =  useState([]);
    const {count} = useInfiniteScroll()

      useEffect(() => {
        console.log(count); 
        fetchNewArticlesId();
         // eslint-disable-next-line
    }, [count]);


    let finalArticle = []
        const fetchNewArticlesId = async () => {
        try {
            const res = await axios('https://hacker-news.firebaseio.com/v0/newstories.json');
            newArticlesId = [...res.data];
            setNewArticlesId(res.data)
            // console.log(res.data);
            
            await Promise.all(
                        newArticlesId.slice(0 , count).map(async (id) => {
                            const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            newArticle = [response.data]
                            let newArticle1 = (Object.entries(newArticle));
                            let newArticleElTitle = newArticle1[0][1]
                            finalArticle.push(newArticleElTitle)
                            setNewArticle(response.data)
                            ReactDOM.render(
                                <ul>
                                    <NewArticles data = {finalArticle}/>
                               </ul> ,
                                document.getElementById('new')
                            )
                            
                            // console.log(response.data);
                        })
                    )
        } catch (error) {
            console.log(error);
        } 
           
    }; 

    return (
        <div className = 'container' id = 'new'>
            
        </div>
    )
}

export default New

