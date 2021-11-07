import { getNewStoriesIds } from './apis'
import React , { useState , useEffect } from 'react'
import Articles from './Articles';
import { useInfiniteScroll } from './useInfiniteScroll';

//  react-hooks/exhaustive-deps
const New = () => {

    let [newArticlesId , setNewArticlesId] =  useState([]);
    // let [newArticle , setNewArticle] =  useState([]);
    const {count} = useInfiniteScroll()

      useEffect(() => {
        getNewStoriesIds()
        .then(data => data && setNewArticlesId(data.data));
         // eslint-disable-next-line
    }, [count]);

   
       return newArticlesId.slice(0,count)
       .map(item => <Articles item = {item} key = {item}/>)
};

export default New

