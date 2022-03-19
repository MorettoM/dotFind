import React from 'react'
import FormButton from '../FormButton/FormButton'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll'

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
                <ScrollAnimation className='navbar-list'
                    offset={100}
                    animateIn={'animate__fadeInDown'}
                    animateOnce={true}
                    animatePreScroll={true}
                >

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
                </ScrollAnimation>

                <FormButton>Lets talk!</FormButton>
            </div>
        </div>
    )
}

export default Navbar;  