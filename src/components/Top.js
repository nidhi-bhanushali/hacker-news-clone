import { getTopStoriesIds } from './apis'
import React , { useState , useEffect } from 'react'
import Articles from './Articles';
import { useInfiniteScroll } from './useInfiniteScroll';

//  react-hooks/exhaustive-deps
const Top = () => {
    const [ArticlesId , setArticlesId] =  useState([]);
    const {count} = useInfiniteScroll()

      useEffect(() => {
        getTopStoriesIds()
        .then(data => data && setArticlesId(data.data));
        
         // eslint-disable-next-line
    }, [count]);

   
       return ArticlesId.slice(0,count)
       .map(item => <Articles item = {item} key = {item}/>)
};

export default Top

