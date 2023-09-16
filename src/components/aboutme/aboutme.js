import React from 'react'; 
import './aboutme.css';
import Avatar from '../../assets/AvatarMaker.png';


const Aboutme = () => {
    return (
        <section id = "aboutme">
            <div className = "aboutme">
                <img src={Avatar} className = "avatar"/>
                <span className = "hi" id = "intro">Hello!</span>
                <p className = "name" id = "intro">My name is Brenda</p>
                <p className = "bio" id = "intro">
                    I have 10 years experience working in a tech company. I have my bachelors in Business Administration from Texas Womens University and a certificate from UTSA in FullStack Web Development. I am currently a Senior QA tester for an agtech company with a background in implementations and software solutions making me efficient in understanding, implementing and testing software as a service applications. I am passionate about learning and expanding my skills sets.
                </p>
            </div>
        </section>
            
    )
}

export default Aboutme