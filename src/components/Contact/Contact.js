import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

//import react icons
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ylmbed8', 'template_zz74bq6', form.current, '2wOTNc9wYwWuRyl6z')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Let's Connect</h5>
            <h2>Contact Me</h2>

            <div className='container contact-container'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <MdOutlineEmail className='contact-icon' />
                        <h4>Email</h4>
                        <a href='mailto:hiddentech03@gmail.com' target='_blank' >Inquire</a>
                    </article>
                    <article className='contact-option'>
                        <RiMessengerLine className='contact-icon' />
                        <h4>Messenger</h4>
                        <a href='https://m.me/tre.rush.5' target='_blank' >Message</a>
                    </article>
                    <article className='contact-option'>
                        <FaInstagram className='contact-icon' />
                        <h4>Instagram</h4>
                        <a href='https://www.instagram.com/rush.tre/' target='_blank' >Follow</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <input type='text' name='name' placeholder='Full Name' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <textarea name='message' placeholder='Message' rows='10'></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact; 