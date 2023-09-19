import React from 'react';
import './portfolio.css';
import EmployeeTracker from '../../assets/ecommerce.png';
import SocialNetworkAPI from '../../assets/socialnetworkapi.png';
import Ecommerce from '../../assets/ecommerce.png';
import NoteTaker from '../../assets/notetakerdemo.png';
import SVGLogo from '../../assets/svglogo.png';
import TextEditor from '../../assets/jateinstall.png';


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className = 'portfoliotitle'>My Portfolio</h2>
            < div className = "worksImgs">
                <img src = {EmployeeTracker} alt="" className = "workImg"/><a href="https://github.com/bramirez09/employeetracker" className='employee'>Employee Tracker</a>
                <img src = {SocialNetworkAPI} alt="" className = "workImg"/><a href="https://github.com/bramirez09/socialnetworkapi" className='socialnetworkapli'>Social Network API</a>
                <img src ={Ecommerce} alt="" className = "workImg"/><a href="https://github.com/bramirez09/ormecommerce">E-Commerce</a>
                <img src = {NoteTaker} alt="" className = "workImg"/>< a href="https://github.com/bramirez09/NoteTaker">NoteTaker</a>
                <img src = {SVGLogo} alt="" className = "workImg"/>< a href="https://github.com/bramirez09/svglogo">SVGLogo Maker</a>
                <img src = {TextEditor} alt="" className = "workImg"/><a href="https://pwatexteditor99-dca91d2260d2.herokuapp.com/">Text Editor</a>
            </div>
        </section>
    )

}

export default Portfolio