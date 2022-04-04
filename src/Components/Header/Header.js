import React from 'react';
import { Link } from 'react-router-dom';
import './Headerstyle.css'
const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Reviews</Link>
            
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;