import React from 'react';
import './portfolio.css';

//import images 
import img1 from '../../assets/sky-img.jpg';
import img2 from '../../assets/spottr-img.jpg';
import img3 from '../../assets/music-dive-img.jpg';
import img4 from '../../assets/run-buddy-img.jpg';
import img5 from '../../assets/deep-thoughts-img.jpg';
import img6 from '../../assets/express-notes-img.jpg';
import img7 from '../../assets/shopping.jpg'



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio-container'>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img3} alt='' />
                    </div>
                    <h3>Music Dive</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/project-1' className='btn' target='_blank'>Github</a>
                        <a href='https://rush0218.github.io/project-1/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img2} alt='' />
                    </div>
                    <h3>Spottr</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/spottr' className='btn' target='_blank'>Github</a>
                        <a href='https://spottr-projecttwo.herokuapp.com/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img7} alt='' />
                    </div>
                    <h3>FiveFires</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/AshtonBrugh/project-three' className='btn' target='_blank'>Github</a>
                        <a href='https://immense-fortress-45339.herokuapp.com/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img4} alt='' />
                    </div>
                    <h3>Run Buddy</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/run-buddy' className='btn' target='_blank'>Github</a>
                        <a href='https://rush0218.github.io/run-buddy/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img5} alt='' />
                    </div>
                    <h3>Deep Thoughts</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/deep-thoughts' className='btn' target='_blank'>Github</a>
                        <a href='https://deep-thoughts-rush0218.herokuapp.com' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img1} alt='' />
                    </div>
                    <h3>Sky</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/sky' className='btn' target='_blank'>Github</a>
                        <a href='https://rush0218.github.io/sky/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Portfolio;