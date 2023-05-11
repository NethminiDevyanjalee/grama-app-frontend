import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import notificationIcon from '../assets/images/notification.png';
import profileIcon from '../assets/images/user.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItem}>
        <li><Link to="/" activeClassName={styles.active} className={styles.navLink}>Home</Link></li>
        <li><Link to="/apply" className={styles.navLink}>Apply</Link></li>
        <li><Link to="/status" className={styles.navLink}>Status</Link></li>
        <li><Link to="/help" className={styles.navLink}>Help</Link></li>
      </ul>
      <ul className={styles.navIcons}>
        <li><Link to="/notifications"><img className={styles.navIcon} src={notificationIcon} alt="Notification"/></Link></li>
        <li><Link to="/profile" ><img className={styles.navIcon} src={profileIcon} alt="Profile"/></Link></li>
      </ul>
    </nav>  
  );
}

export default Navbar;
