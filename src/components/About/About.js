import React from 'react';
import './about.css';
import Img from '../../assets/DSC07374(2).jpg'

// import icons 
import { BiBookOpen } from 'react-icons/bi';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about_me'>
                    <div className='about_img'>
                        <img src={Img} alt='about me image' />
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-p'>
                            <h5>Experience</h5>
                            <h5>Projects</h5>
                            <h5></h5>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About; 