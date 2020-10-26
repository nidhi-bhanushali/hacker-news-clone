import React from 'react'

const NewArticles = ( {data} ) => {
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
