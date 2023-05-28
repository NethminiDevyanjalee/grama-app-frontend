import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import main from '../main.module.css';
import classes from './Application.module.css';
import submitIcon from '../../assets/images/submitIcon.png';
import applicationImage from '../../assets/images/applicationImage.svg';
import Swal from 'sweetalert2';
import { useAuthContext } from "@asgardeo/auth-react";
import { identityCheck } from '../../api/identity-check.js';
import { policeCheck } from '../../api/police-check';
import { addressCheck } from '../../api/address-check';

export default function Application() {

    const {getAccessToken} = useAuthContext();

    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!id) {
            setError('⚠ Please enter your ID');
            return;
          }
        
          if (!address) {
            setError('⚠ Please enter your address');
            return;
          }

          try {
            const accessToken = await getAccessToken();
            
            const [identityCheckResponse, addressCheckResponse, policeCheckResponse] = await Promise.all([
                identityCheck(accessToken, id),
                addressCheck(accessToken, id, address),
                policeCheck(accessToken, id)
            ]);

            if (!identityCheckResponse.ok || !addressCheckResponse.ok || !policeCheckResponse.ok) {
                setError('⚠ Something went wrong');
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Applied Successfully',
                text: 'You will be redirected to the status page.',
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                history.push('/status')
            });
        } catch (error) {
            setError('⚠ An error occurred while submitting the form');
            console.error(error);
        }
    };

    return(
        <div className={`${main.gramaApp} ${classes.root}`}>
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