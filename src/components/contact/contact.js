import React from 'react';
import './contact.css';
import {validateEmail} from '../../utils/helper'

const Contact = () => {
    // const [email,setEmail] = UseState('');

    // const handleFormSubmit = (e) => {
    //     if (!validateEmail(email)) {
    //         setErrorMessage('Email is invalid');
    // }

    return (
        < section className = "contactPage" >
            <div className = "contact">
                <h2 className='contacttitle'>Contact Me</h2>
                <span className='contactDesc'> Please Fillout Form</span>
                <form className='contactForm'>
                    <input type="text" className='name' placeholder="<NAME>" />
                    <input type="text" className='email' placeholder='<Email>'/>
                    <textarea name="message" rows="5" placeholder='<Your message here>'/>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact