import React , {useEffect , useState} from 'react'
import {MAX_STORIES , MORE_STORIES} from '../constants'

export const useInfiniteScroll = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [count , setCount] = useState(MORE_STORIES);


      function handleScroll() {
        const {scrollTop , scrollHeight , clientHeight} = 
        document.documentElement;
    
        if(scrollTop + clientHeight >= scrollHeight - 5){
            setIsFetching(true);
            console.log('fetching...');
        }
      }

      useEffect(() => {
        if (!isFetching) return;
        
        if (count + MORE_STORIES >= MAX_STORIES){
            setCount(MAX_STORIES)
        }else{
            setCount(count + MORE_STORIES);
        }

        setIsFetching(false);
      }, [isFetching]);

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []); 

    return { count }
}


