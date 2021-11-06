import { getTopStoriesIds } from './apis'
import React , { useState , useEffect } from 'react'
import TopArticles from './TopArticles';
import { useInfiniteScroll } from './useInfiniteScroll';

//  react-hooks/exhaustive-deps
const Top = () => {
    const [topArticlesId , setTopArticlesId] =  useState([]);
    const {count} = useInfiniteScroll()

      useEffect(() => {
        getTopStoriesIds()
        .then(data => data && setTopArticlesId(data.data));
        
         // eslint-disable-next-line
    }, [count]);

   
       return topArticlesId.slice(0,count)
       .map(item => <TopArticles item = {item} key = {item}/>)
};

export default Top

