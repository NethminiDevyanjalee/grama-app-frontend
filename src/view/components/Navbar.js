import './navbar.css'
import { NavLink, useLocation } from 'react-router-dom';
import notificationIcon from '../../assets/images/notification.png'
import profileIcon from '../../assets/images/user.png'
import React, { useState, useEffect } from 'react';

function Navbar() {

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const indicator = document.querySelector('.indicator');
    const activeNavLink = document.querySelector('.nav-link.active');
    if (activeNavLink) {
      const { offsetLeft, offsetWidth } = activeNavLink;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeLink]);

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-item">
          <li><NavLink to="/home" activeclassname="active" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/apply" className="nav-link">Apply</NavLink></li>
          <li><NavLink to="/status" className="nav-link">Status</NavLink></li>
          <li><NavLink to="/help" className="nav-link">Help</NavLink></li>
          <div className="indicator"></div>
        </ul>
        <ul className="nav-icons">
          <li><NavLink to="/notifications"><img className="nav-icon" src={notificationIcon} alt="Notification" /></NavLink></li>
          <li><NavLink to="/profile"><img className="nav-icon" src={profileIcon} alt="Profile" /></NavLink></li>
        </ul>
      </nav>  
    </div>
  );
}

export default Navbar;
