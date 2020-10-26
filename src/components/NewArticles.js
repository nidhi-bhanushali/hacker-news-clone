import React , { useEffect } from 'react'

const NewArticles = ( {data} ) => {

    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
        console.log('Fetch more list items!');
      }

    // console.log(data)
    return (
        <div>
            <ul className="list">
                {data.map(item => (
                   <div className = 'card'>
                       <h4><a href = {item.url}>{item.title}</a></h4>
                       <p className = "dark-color">{item.score} points by <span className = 'dark-color'>{item.by} | </span>
                       <span className = 'dark-color'>{item.descendants} </span>comments</p>
                   </div>
                ))}
            </ul>
        </div>
    )
}

export default NewArticles
