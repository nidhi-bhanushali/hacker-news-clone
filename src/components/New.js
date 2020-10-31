import { getNewArticles, getNewStoriesIds } from './apis'
import React , { useState , useEffect , memo} from 'react'
import NewArticles from './NewArticles';
import { useInfiniteScroll } from './useInfiniteScroll';
// import Top from './Top';

//  react-hooks/exhaustive-deps
const New = () => {

    let [newArticlesId , setNewArticlesId] =  useState([]);
    // let [newArticle , setNewArticle] =  useState([]);
    const {count} = useInfiniteScroll()

      useEffect(() => {
        console.log(count); 
        getNewStoriesIds()
        .then(data => data && setNewArticlesId(data.data));
         // eslint-disable-next-line
    }, []);

   
       return newArticlesId.map(item => <NewArticles item = {item} key = {item}/>)
};

export default New

