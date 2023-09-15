import React from 'react'; 
import './aboutme.css';
import Avatar from '../../assets/AvatarMaker.png';


const Aboutme = () => {
    return (
        <section id = "aboutme">
            <div className = "avatar">
                <img src={Avatar} className = "avatar"/>
                <span className = "hi">Hi!</span>
            </div>
        </section>
            
    )
}

export default Aboutme