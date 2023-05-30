import './navbar.css'
import { useLocation, NavLink } from 'react-router-dom';
import notificationIcon from '../../assets/images/notification.png'
import profileIcon from '../../assets/images/user.png'
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useAuthContext } from "@asgardeo/auth-react";

function Navbar() {

  const { isAuthenticated, getBasicUserInfo } = useAuthContext();

  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [isAdmin, setAdmin] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const path = location.pathname;
    let tabValue = 0;

    if (!isAdmin) {
      if (path === '/apply') {
        tabValue = 1;
      } else if (path === '/status') {
        tabValue = 2;
      } else if (path === '/help') {
        tabValue = 3;
      } else if (path === '/notifications') {
        tabValue = 4;
      } else if (path === '/profile') {
        tabValue = 5;
      }
    } else {
      if (path === '/admin') {
        tabValue = 1;
      } else if (path === '/profile') {
        tabValue = 2;
      }
    }
    
    setValue(tabValue);

    const checkIfAdmin = async () => {
      try {
        if (isAuthenticated) {
          const userInfo = await getBasicUserInfo();
          if (userInfo.groups && Array.isArray(userInfo.groups)) {
            setAdmin(userInfo.groups.some(item => item === "Grama_Niladari"));
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    checkIfAdmin();
  }, [location, isAdmin, isAuthenticated, getBasicUserInfo]);

  return (
    <div>
      <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>
        {!isAdmin ? (
          <AuthenticatedComponent>
            <Box className="nav-item" sx={{ width: '100%' }}>
              <Tabs indicatorColor={"inherit"} textColor={"inherit"} value={value} onChange={handleChange} aria-label="nav tabs example">
                <Tab label="Home" component={NavLink} to="/home" sx={{marginLeft: '350px'}}/>
                <Tab label="Apply" component={NavLink} to="/apply" />
                <Tab label="Status" component={NavLink} to="/status" />
                <Tab label="Help" component={NavLink} to="/help" sx={{marginRight: '350px'}} />
                <Tab className="nav-icon gap" component={NavLink} to="/notifications" icon={<img src={notificationIcon} alt="Notification" />} />
                <Tab className="nav-icon" component={NavLink} to="/profile" icon={<img src={profileIcon} alt="Profile" />} />
              </Tabs>
            </Box>
          </AuthenticatedComponent>
        ) : (
          <AuthenticatedComponent>
            <Box className="nav-item" sx={{ width: '100%' }}>
              <Tabs indicatorColor={"inherit"} textColor={"inherit"} value={value} onChange={handleChange} aria-label="nav tabs example">
                <Tab label="Home" component={NavLink} to="/home" sx={{marginLeft: '500px'}}/>
                <Tab label="Dashboard" component={NavLink} to="/admin" sx={{marginRight: '500px'}} />
                <Tab className="nav-icon" component={NavLink} to="/profile" icon={<img src={profileIcon} alt="Profile" />} />
              </Tabs>
            </Box>
          </AuthenticatedComponent>
        )}
      </nav>  
    </div>
  );
}

export default Navbar;
