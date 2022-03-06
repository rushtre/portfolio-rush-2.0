import React from 'react';
import './experience.css';
import { BsShieldFillCheck } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills</h5>
            <h2>My Experience</h2>

            <div className='container experience-container'>
                <div className='frontend'>
                    <h3>Frontend Development</h3>
                    <div className='exp-content'>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='backend'>
                    <h3>Backend Development</h3>
                    <div className='exp-content'>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>Express.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <BsShieldFillCheck className='exp-icon' />
                            <div>
                                <h4>Handlebars.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience; 