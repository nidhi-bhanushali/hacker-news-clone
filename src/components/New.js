import axios from 'axios';
import ReactDOM from 'react-dom';
import React , { useState , useEffect} from 'react'
import NewArticles from './NewArticles';
// import Top from './Top';


const New = () => {

    let [newArticlesId , setNewArticlesId] =  useState([]);
    let [newArticle , setNewArticle] =  useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        if (!isFetching) return;
        fetchMoreArticles();
      }, [isFetching]);

      function handleScroll() {
        const {scrollTop , scrollHeight , clientHeight} = 
        document.documentElement;
    
        if(scrollTop + clientHeight >= scrollHeight - 5){
            setIsFetching(true);
            console.log('fetching...');
        }
      }

      function fetchMoreArticles() {
        setTimeout(() => {
            setIsFetching(false);
            console.log('Not fetching...');
            setTimeout(() => {
                console.log("Fetched!")
            },300);
         } , 1000)
        //   setNewArticlesId(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
  }


    useEffect(() => {
        let finalArticle = []
        var fetchNewArticlesId = async () => {
        try {
            const res = await axios('https://hacker-news.firebaseio.com/v0/newstories.json?orderBy="$key"&limitToFirst=30');
            newArticlesId = [...res.data];
            // setNewArticlesId(res.data)
            console.log(res.data);
            
            await Promise.all(
                        newArticlesId.map(async (id) => {
                            const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            newArticle = [response.data]
                            let newArticle1 = (Object.entries(newArticle));
                            let newArticleElTitle = newArticle1[0][1]
                            // let newArticleElUrl = newArticle1[0][1].url
                             finalArticle.push(newArticleElTitle)
                            //  console.log(finalArticle)
                            // setNewArticle(response.data)
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
        fetchNewArticlesId();
    }, []);



    

    return (
        <div className = 'container' id = 'new'>
            
        </div>
    )
}

export default New

