import axios from 'axios';
import ReactDOM from 'react-dom';
import React , { useState , useEffect} from 'react'
import TopArticles from './TopArticles';



const Top = () => {

    let [topArticlesId , setTopArticlesId] =  useState([]);
    let [topArticle , setTopArticle] =  useState([]);

    //   function fetchMoreArticles() {
    //     setTimeout(() => {
    //         setIsFetching(false);
    //         console.log('Not fetching...');
    //         setTimeout(() => {
    //             fetchTopArticlesId();
    //             console.log('Fetched!')
    //         },300);
    //      } , 1000)
        //   setNewArticlesId(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
//   }

    useEffect(() => {
        
        fetchTopArticlesId();
    }, []);

    let finalArticle = []
        const fetchTopArticlesId = async () => {
        try {
            const res = await axios('https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=30');
            topArticlesId = [...res.data];
            setTopArticlesId(res.data)
            // console.log(res.data);
            
            await Promise.all(
                        topArticlesId.map(async (id) => {
                            const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            topArticle = [response.data]
                            let topArticle1 = (Object.entries(topArticle));
                            let topArticleElTitle = topArticle1[0][1]
                             finalArticle.push(topArticleElTitle)
                            //  console.log(finalArticle)
                            setTopArticle(response.data)
                            ReactDOM.render(
                                <ul>
                                    <TopArticles data = {finalArticle}/>
                               </ul> ,
                                document.getElementById('top')
                            )
                            
                            // console.log(response.data);
                        })
                    )
        } catch (error) {
            console.log(error);
        } 
           
    };

    

    return (
        <div className = 'container' id = 'top'>
            
        </div>
    )
    }

export default Top


