import React from 'react'
import './Navbar.scss'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='container'>
            <div className='navbar-list'>
            <div className='nav-logo'>
                <a href='#'></a>
            <img src='/logo-provisorio.png'></img>
            </div>
                <div className='nav-menu'>
                <a href='#'>Work</a>
                <a href='#'>Services</a>
                <a href='#'>Our Company</a>
                <a href='#'>Community</a>
                </div>
            </div>
            <div className='navbar_button'>
                <button>
                    Let's talk!
                </button>
            </div>
            </div>
        </div>
    )
}

export default Header;