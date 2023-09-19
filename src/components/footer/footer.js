import React from 'react';
import './footer.css';
import Github from '../../assets/github-mark.png'
import LinkedIn from '../../assets/LI-Logo.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className = 'links'>
               <a href = 'https://github.com/bramirez09'> <img src={Github} alt ='' className='link'/></a>
               <a href = 'https://www.linkedin.com/in/brenda-ramirez-247a46140/'><img src={LinkedIn} alt ='' className='link' href=''/></a>
            </div>
        </footer>
    )
}

export default Footer