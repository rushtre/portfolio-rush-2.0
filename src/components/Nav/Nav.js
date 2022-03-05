import React from 'react';
import './nav.css';

// import icons from react icons
import { BiHomeAlt } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi';
import { IoIosGitNetwork } from 'react-icons/io'
import { FaRegFolderOpen } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href='#' className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaRegFolderOpen /></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><IoIosGitNetwork /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
};

export default Nav;