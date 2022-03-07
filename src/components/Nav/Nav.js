import React, { useState } from 'react';
import './nav.css';

// import icons from react icons
import { BiHomeAlt } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi';
import { IoIosGitNetwork } from 'react-icons/io'
import { FaRegFolderOpen } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi'


const Nav = (props) => {

    const {
        setContactSelected,
        setHeaderSelected,
        setAboutSelected,
        setPortfolioSelected,
        setExperienceSelected
    } = props;

    const sections = [
        { name: 'header', img: <BiHomeAlt /> },
        { name: 'about', img: <BiUser /> },
        { name: 'experience', img: <FaRegFolderOpen /> },
        { name: 'portfolio', img: <IoIosGitNetwork /> },
        { name: 'contact', img: <BiMessageSquareDetail /> }
    ]

    const [currentSection, setCurrentSection] = useState(sections[0]);

    const sectionSelected = (name) => {
        if (name === 'header') {
            setHeaderSelected(true)
            setAboutSelected(false)
            setExperienceSelected(false)
            setPortfolioSelected(false)
            setContactSelected(false)
        }
        else if (name === 'about') {
            setHeaderSelected(false)
            setAboutSelected(true)
            setExperienceSelected(false)
            setPortfolioSelected(false)
            setContactSelected(false)
        }
        else if (name === 'experience') {
            setHeaderSelected(false)
            setAboutSelected(false)
            setExperienceSelected(true)
            setPortfolioSelected(false)
            setContactSelected(false)
        } else if (name === 'portfolio') {
            setHeaderSelected(false)
            setAboutSelected(false)
            setExperienceSelected(false)
            setPortfolioSelected(true)
            setContactSelected(false)
        } else if (name === 'contact') {
            setHeaderSelected(false)
            setAboutSelected(false)
            setExperienceSelected(false)
            setPortfolioSelected(false)
            setContactSelected(true)
        }
    }

    return (
        <nav>
            {sections.map((section) => (
                <a key={section.name} href={`#${section.name}`} onClick={() => {
                    sectionSelected(section.name)
                    setCurrentSection(section)
                }} className={currentSection.name === section.name ? 'active' : ''}>
                    {section.img}
                </a>
            ))}
        </nav>
    )
};

export default Nav;
