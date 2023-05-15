import { Link } from 'react-router-dom'
import './navbar.module.css'
import notificationIcon from '../../assets/images/notification.png'
import profileIcon from '../../assets/images/user.png'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-item">
        <li><Link to="/" activeClassName="active" className="nav-link">Home</Link></li>
        <li><Link to="/apply" className="nav-link">Apply</Link></li>
        <li><Link to="/status" className="nav-link">Status</Link></li>
        <li><Link to="/help" className="nav-link">Help</Link></li>
      </ul>
      <ul className="nav-icons">
        <li><Link to="/notifications"><img className="nav-icon" src={notificationIcon} alt="Notification"/></Link></li>
        <li><Link to="/profile" ><img className="nav-icon" src={profileIcon} alt="Profile"/></Link></li>
      </ul>
    </nav>  
  );
}

export default Navbar;
