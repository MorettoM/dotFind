import React from 'react';
import FormButton from '../FormButton/FormButton'
import './Header.scss'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll'

const Header = () => {
    return (
        <section className='header-container'>

            <section className='responsive-header-container'>
                <div className='responsive-header-img'>
                    <img alt='header' src='/fondo-header.jpg'></img>
                </div>
                <div className='responsive-titles-container'>
                    <div className='responsive-header-title'>
                        <h1>Let's build a product that gets results!</h1>
                    </div>
                    <div className='responsive-header-subtitle'>
                        <p>DotFind openly collaborates with ambitious startups and companies to plan, build, and grow tech products. Our partnership goes far beyond delivering features; we make sure we solve the right problem and build a product that brings true value to users</p>
                    </div>
                    <div className='responsive-container-button'>
                        <FormButton>
                            Be partners!
                        </FormButton>
                    </div>
                </div>
            </section>


            <div className='titles-container'>
                <ScrollAnimation
                    offset={100}
                    className='header-title'
                    animateIn={'animate__fadeInLeft'}
                    animateOnce={true}>
                    <h1>Let's build a product that gets results!</h1>
                </ScrollAnimation>

                <ScrollAnimation
                    offset={100}
                    className='header-subtitle'
                    animateIn={'animate__fadeInLeft'}
                    animateOnce={true}
                    delay={100}>
                    <p>DotFind openly collaborates with ambitious startups and companies to plan, build, and grow tech products. Our partnership goes far beyond delivering features; we make sure we solve the right problem and build a product that brings true value to users</p>
                </ScrollAnimation>

                <ScrollAnimation
                    offset={100}
                    className='container-button'
                    animateIn={'animate__fadeInLeft'}
                    animateOnce={true}
                    delay={150}>
                    <FormButton>
                        Be partners!
                    </FormButton>
                </ScrollAnimation>
            </div>

            <ScrollAnimation
                offset={100}
                className='header-img'
                animateIn={'animate__fadeInRight'}
                animateOnce={true}
            >
                <img alt='header' src='/fondo-header.jpg'></img>
            </ScrollAnimation>
        </section >

    )
}

export default Header;