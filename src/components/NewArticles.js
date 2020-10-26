import React from 'react'

const NewArticles = ( {data} ) => {
    console.log(data)
    return (
        <div>
            <ul className="list">
                {data.map(item => (
                   <div className = 'card'>
                       <h4>{item.title}</h4>
                        <a href = {item.url}>{item.url}</a>
                   </div>
                ))}
            </ul>
        </div>
    )
}

export default NewArticles
