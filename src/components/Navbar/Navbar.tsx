import React from 'react'
import FormButton from '../FormButton/FormButton'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container-mobile'>
                <div className='menu-mobile'>
                    <a href='#test' className='logo-responsive'>
                        <img alt="logo" src='/logo-provisorio.png'></img>
                    </a>
                    <a href='#test' className='burger-menu'>
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </div>
            </div>
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