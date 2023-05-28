import './navbar.css'
import { NavLink } from 'react-router-dom';
import notificationIcon from '../../assets/images/notification.png'
import profileIcon from '../../assets/images/user.png'
import logo from '../../assets/images/logo.png'
import React from 'react';
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <nav className="navbar">
          <AuthenticatedComponent>
            <img src={logo} alt="Logo" className='logo'/>
            <Box className="nav-item" sx={{ width: '100%' }}>
              <Tabs indicatorColor={"white"} textColor={"white"} value={value} onChange={handleChange} aria-label="nav tabs example">
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
