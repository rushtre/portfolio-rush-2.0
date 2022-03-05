import React from 'react';
import './about.css';
import Img from '../../assets/DSC07374(2).jpg'

// import icons 
import { MdWorkOutline } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-img'>
                        <img src={Img} alt='about me image' />
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <MdWorkOutline className='about-icon' />
                            <h5>Experience</h5>
                            <small>1+ Years</small>
                        </article>
                        <article className='about-card'>
                            <BsClipboardData className='about-icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>2 Clients</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;

