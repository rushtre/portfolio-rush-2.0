import React from 'react';
import CV from '../../assets/My-resume-2022.pdf';

const Info = () => {
    return (
        <div className='info'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Connect</a>
        </div>
    )
};

export default Info; 
