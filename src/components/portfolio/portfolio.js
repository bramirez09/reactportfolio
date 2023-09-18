import React from 'react';
import './portfolio.css';
import EmployeeTracker from '../../assets/colleagues-7408549_1280.png';
import SocialNetworkAPI from '../../assets/connections-2099068_1280.png';
import Ecommerce from '../../assets/e-commerce-1606962_1280.png';
import NoteTaker from '../../assets/paperwork-5000691_1280.png';
import SVGLogo from '../../assets/red-304573_1280.png';
import TextEditor from '../../assets/text-editor-1794110_1280.png';


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className = 'portfoliotitle'>My Portfolio</h2>
            < div className = "worksImgs">
                <img src = {EmployeeTracker} alt="" className = "workImg"/>
                <img src = {SocialNetworkAPI} alt="" className = "workImg"/>
                <img src ={Ecommerce} alt="" className = "workImg"/>
                <img src = {NoteTaker} alt="" className = "workImg"/>
                <img src = {SVGLogo} alt="" className = "workImg"/>
                <img src = {TextEditor} alt="" className = "workImg"/>
            </div>
        </section>
    )

}

export default Portfolio