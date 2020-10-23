import axios from 'axios';
import React , { useState , useEffect} from 'react'

const New = () => {

    let [newArticlesId , setNewArticlesId] =  useState([]);
    const [newArticle , setNewArticle] =  useState({});

    useEffect(() => {
        const fetchNewArticlesId = async () => {
        try {
            const res = await axios('https://hacker-news.firebaseio.com/v0/newstories.json?orderBy="$key"&limitToFirst=30');
            newArticlesId = [...res.data]
            console.log(res.data);
            
            await Promise.all(
                        newArticlesId.map(async (id) => {
                            const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            setNewArticle(response.data)
                            console.log(response.data);
                        })
                    )
        } catch (error) {
            console.log(error);
        }    
    };
        fetchNewArticlesId();
    }, []);

    return (
        <div className = 'container'>
            <h5>The page shows New articles</h5> 
        </div>
    )
}

export default New
