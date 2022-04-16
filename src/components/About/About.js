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
                        Entry-level Full-stack developer with a background in commercial facility management. Proficient in HTML, CSS, JavaScript and React.js.
                        Dedicated to learning additional technologies and coding languages. Interested in mobile-ready design and responsive single-page applications.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;

