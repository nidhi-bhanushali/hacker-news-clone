import { getTopArticles, getTopStoriesIds } from './apis'
import React , { useState , useEffect , memo} from 'react'
import TopArticles from './TopArticles';
import { useInfiniteScroll } from './useInfiniteScroll';
// import Top from './Top';

//  react-hooks/exhaustive-deps
const Top = () => {

    let [topArticlesId , setTopArticlesId] =  useState([]);
    // let [topArticle , setTopArticle] =  useState([]);
    const {count} = useInfiniteScroll()

      useEffect(() => {
        console.log(count); 
        getTopStoriesIds()
        .then(data => data && setTopArticlesId(data.data));
         // eslint-disable-next-line
    }, []);

   
       return topArticlesId.map(item => <TopArticles item = {item} key = {item}/>)
};

export default Top

