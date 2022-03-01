import React from 'react'
import FormButton from '../FormButton/FormButton'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar-list'>
                    <div className='nav-logo'>
                        <a href='#test'>
                            <img alt="logo" src='/logo-provisorio.png'></img>
                        </a>
                    </div>
                    <div className='nav-menu'>
                        <a href='#test'>Work</a>
                        <a href='#test'>Services</a>
                        <a href='#test'>Our Company</a>
                        <a href='#test'>Community</a>
                    </div>
                </div>
                <FormButton>Lets talk!</FormButton>
            </div>
        </div>
    )
}

export default Navbar;  