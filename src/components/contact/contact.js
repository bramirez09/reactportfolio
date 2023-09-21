import React from 'react';
import { useState } from 'react';
import './contact.css';
import { validateEmail } from '../../utils/helper'
import Resume from '../../assets/resumedemo.png'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {

        e.preventDefault()
        console.log("email", email)

    }
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        console.log(inputValue, inputType)

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            if (!validateEmail(inputValue)) {
                setErrorMessage('Email is invalid');
            } else {
                setErrorMessage('')
                setEmail(inputValue);
            }
        }
        // else if (inputType === 'userName') {
        //   setUserName(inputValue);
        // } else {
        //   setPassword(inputValue);
        // }
    };
    return (
        < section className="contactPage" >
            <div className="contact">
                <h2 className='contacttitle'>Contact Me</h2>
                <span className='contactDesc'> Please Fillout Form</span>
                <form className='contactForm' onSubmit={handleFormSubmit}>
                    <input type="text" className='name' placeholder="<NAME>" />
                    <input type="email" name="email" className='email' onChange={handleInputChange} placeholder='<Email>' />
                    {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                    <textarea name="message" rows="5" placeholder='<Your message here>' />
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                </form>
                <a href={Resume} download={Resume}>Resume</a>
            </div>
        </section>
    )
}

export default Contact