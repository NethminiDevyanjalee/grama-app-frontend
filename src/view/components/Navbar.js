import './navbar.css'
import { useLocation, NavLink } from 'react-router-dom';
import notificationIcon from '../../assets/images/notification.png'
import profileIcon from '../../assets/images/user.png'
import React, { useEffect } from 'react';
import logo from '../../assets/images/logo.png'
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {

  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const path = location.pathname;
    let tabValue = 0;

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
  
    setValue(tabValue);
  }, [location]);

  return (
    <div>
      <nav className="navbar">
          <AuthenticatedComponent>
            <img src={logo} alt="Logo" className='logo'/>
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
      </nav>  
    </div>
  );
}

export default Navbar;
