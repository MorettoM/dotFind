import React from 'react';
import FormButton from '../FormButton/FormButton'
import './Header.scss'

const Header = () => {
    return (


        <section className='header-container'>
            <div className='titles-container'>
                <div className='header-title'>
                    <h1>Let's build a product that gets results!</h1>
                </div>
                <div className='header-subtitle'>
                    <p>DotFind openly collaborates with ambitious startups and companies to plan, build, and grow tech products. Our partnership goes far beyond delivering features; we make sure we solve the right problem and build a product that brings true value to users</p>
                </div>
                <div className='container-button'>
                    <FormButton>
                        Be partners!
                    </FormButton>
                </div>
            </div>
            <div className='header-img'>
                <img alt='header' src='/fondo-header.jpg'></img>
            </div>


        </section>
    )
}

export default Header;