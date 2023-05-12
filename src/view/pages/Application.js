import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import resets from '../resets.module.css';
import classes from './Application.module.css';
import submitIcon from '../../assets/images/submitIcon.png';
import applicationImage from '../../assets/images/applicationImage.svg';

export default function Application() {
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!id) {
            setError('⚠ Please enter your ID');
            return;
          }
        
          if (!address) {
            setError('⚠ Please enter your address');
            return;
          }

          navigate('/status');
    };

    return(
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.applicationHeader}>Application</div>
            <div className={classes.applicationDescription}>Apply today for the Grama Certificate</div>
            <form onSubmit={handleSubmit}>
                <div className={classes.applicationFormFrame }></div>
                <div className={classes.formFrame}>
                    <div className={classes.formField}>
                        <div className={classes.formLabel}>ID</div>
                        <input type="text" className={classes.formInput} value={id} placeholder='Enter ID' onChange={handleIdChange} />                    
                    </div>
                    <div className={classes.formField}>
                        <div className={classes.formLabel}>Address</div>
                        <input type="text" className={classes.formInput}  value={address} placeholder='Enter Address' onChange={handleAddressChange} />
                    </div>
                    <div className={classes.formError}>{error}</div>
                </div>
                <button type="submit" className={classes.applicationSubmitButton}>
                    <div className={classes.submitButton}></div>
                    <div className={classes.submitFrame}>
                        <div className={classes.submitDescription}>Submit</div>
                        <div className={classes.submitIcon}>
                            <img src={submitIcon} alt="SubmitIcon" className={classes.applicationIcon} />
                        </div>
                    </div>
                </button>
            </form>
            <div className={classes.applicationImage}>
                <img src={applicationImage} alt="ApplicationImage" className={classes.applicationIcon} />
            </div>  
        </div>
    );

}