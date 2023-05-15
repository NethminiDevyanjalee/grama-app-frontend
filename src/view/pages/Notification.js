import './notification.page.css'
import notification from '../../assets/images/note.png'
import saveIcon from '../../assets/images/save.png'
import React, { useState } from 'react'
import Swal from 'sweetalert2'


function Notification() {

    const [isToggled, setIsToggled] = useState(false);

    const toggleButton = () => {
        setIsToggled(!isToggled);
    };

    const handleSave = () => {
        Swal.fire({
          title: 'Save',
          text: 'Changes saved successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonClass: 'swal2-confirm'
        });
    };

    return (
        <div>
            <div className="page-layout">
                <div className="notification-left-column">
                    <h1>Notification Settings</h1>
                    <h2>Customise notification to your preference</h2>
                    <div className="toggle-section">
                        <div>
                            <h3 className="notification-type">Turn on notifications</h3>
                            <p className="notification-description">Receive a notification for every status change</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" onChange={toggleButton} checked={isToggled} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <button onClick={handleSave}>
                        Save
                        <img src={saveIcon} className="save-icon" alt="Envelope Icon"></img>
                    </button>
                </div>
                <div className="notification-right-column">
                    <img src={notification} alt="Customer Support" />
                </div>
            </div> 
            <p className="copyright">Copyright @2023</p>        
        </div>
    );
}

export default Notification;