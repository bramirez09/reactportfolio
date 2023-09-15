import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll' ; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src ="" alt = ""/>
                <div className = "desktopMenu">
                    <Link className ="desktopMenuListItem">About Me</Link>
                    <Link className ="desktopMenuListItem">Portfolio</Link>
                    <Link className ="desktopMenuListItem">Resume</Link>
                    <Link className ="desktopMenuListItem">Contact Me</Link>
                </div>
                <button className = "desktopMenuBtn">
                    <img src = "" alt= "" className = "desktopMenuImg"/>Contact Me</button>
        </nav>
    )
}

export default Navbar