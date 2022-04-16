import React from 'react';
import Me from '../../assets/me(four).png'
import Resume from '../../assets/My-resume-2022.pdf';
import Socials from './Socials';
import './header.css';

const Header = () => {
    return (
        <header id='header'>
            <div className='container header-container'>
                <h1>Tre' Rush</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <Socials />
                <div className='me'>
                    <img src={Me} alt='me' />
                </div>
                <a href={Resume} download className='resume'>Download Resume</a>
            </div>
        </header>
    )
};

export default Header; 