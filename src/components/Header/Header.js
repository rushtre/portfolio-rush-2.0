import React from 'react';
import Info from './Info';
import Me from '../../assets/me21.png'
import './header.css';

const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h1>Tre' Rush</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <Info />

                <div>
                    <img src={Me} alt='me' />
                </div>
            </div>
        </header>
    )
};

export default Header; 