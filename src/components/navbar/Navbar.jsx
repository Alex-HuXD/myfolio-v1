import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {VscMenu, VscChromeClose} from 'react-icons/vsc'
import './navbar.css'
import nameIcon from  './Icon.png'



const Navbar = () => {
    const [click,setClick] = useState(false);


    const handleClick = () => setClick(!click)  
    const toggleMobileMenu =() => setClick(false);
    
    return (
    <>
      <nav className="navbar">
          <div className="navbar-container container">
            <Link to='/' className='navbar-logo'>
                <img src={nameIcon} alt="name-logo" className="name-logo"/> 
                <h1 className='logo-title'>Portfo<span>lio.</span></h1>  
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <VscChromeClose /> : <VscMenu />}     
            </div>

            <ul className= {click? `nav-menu active` : `nav-menu`}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={toggleMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-links" onClick={toggleMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/projects' className="nav-links" onClick={toggleMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-links" onClick={toggleMobileMenu}>
                        Contact me
                    </Link>
                </li>
            </ul>
          </div>
      </nav>    
    </>
    )
    
}

export default Navbar
