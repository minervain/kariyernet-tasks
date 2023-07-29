import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <div className="sarmalama">
                <div className="logo">Start Bootstrap</div>
                <div className="left">
                    <div className='nb'><Link to="/" style={{backgroundColor:"transparent"}} className='nb'>Home</Link></div>
                    <div className='nb'><Link to="/About" style={{backgroundColor:"transparent"}} className='nb'>About</Link></div>
                    <div className='nb'><Link to="/Contact" style={{backgroundColor:"transparent"}} className='nb'>Contact</Link></div>
                    <div className='nb'><Link to="/Post" style={{backgroundColor:"transparent"}} className='nb'>Same Post</Link></div>
                </div></div>
        </div>
    )
}

export default Header