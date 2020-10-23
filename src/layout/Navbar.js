import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = 'navbar bg-primary'>
            <ul>
                <Link to = '/'>Hacker News</Link>
                <Link to = '/top'>Top</Link>
                <Link to = '/new'>New</Link>
                <Link to = '/best'>Best</Link>
            </ul>
        </div>
    )
}

export default Navbar
