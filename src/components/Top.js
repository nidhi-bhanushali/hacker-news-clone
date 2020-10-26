import axios from 'axios';
import ReactDOM from 'react-dom';
import React , { useState , useEffect} from 'react'
import TopArticles from './TopArticles';



const Top = () => {

    let [topArticlesId , setTopArticlesId] =  useState([]);
    let [topArticle , setTopArticle] =  useState([]);

    useEffect(() => {
        let finalArticle = []
        const fetchTopArticlesId = async () => {
        try {
            const res = await axios('https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=30');
            topArticlesId = [...res.data];
            // setNewArticlesId(res.data)
            console.log(res.data);
            
            await Promise.all(
                        topArticlesId.map(async (id) => {
                            const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            topArticle = [response.data]
                            let topArticle1 = (Object.entries(topArticle));
                            console.log(topArticle1[0][1].url);
                            console.log(topArticle1[0][1].title)
                            let topArticleElTitle = topArticle1[0][1]
                            // let topArticleElUrl = topArticle1[0][1].url
                             finalArticle.push(topArticleElTitle)
                             console.log(finalArticle)
                            // setNewArticle(response.data)
                            ReactDOM.render(
                                <ul>
                                    <TopArticles data = {finalArticle}/>
                               </ul> ,
                                document.getElementById('top')
                            )
                            
                            console.log(response.data);
                        })
                    )
        } catch (error) {
            console.log(error);
        } 
           
    };
        fetchTopArticlesId();
    }, []);

    

    return (
        <div className = 'container' id = 'top'>
            
        </div>
    )
}

export default Top


