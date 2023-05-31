import main from '../main.module.css';
import classes from './Home.module.css';
import homeImage from '../../assets/images/homeImage.svg';
import arrowIcon from '../../assets/images/arrowIcon.png';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect, useState } from 'react';

export default function Home() {

    const history = useHistory();
    const { isAuthenticated, getBasicUserInfo } = useAuthContext();

    const [isAdmin, setAdmin] = useState(false);

    const handleClick = () => {
        if (isAdmin) {
          history.push('/admin');
        } else {
          history.push('/apply');
        }
    };
    
    useEffect(() => {
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
    }, [isAuthenticated, getBasicUserInfo]);

    return (
        <div className={`${main.gramaApp} ${classes.root}`}>
            <div className={classes.homeHeader}>
                <p className={classes.headerWrapper}>
                    <span className={classes.headerLabel1}>Welcome to </span>
                    <span className={classes.headerLabel2}>GRAMA APP</span>
                </p>
            </div>
            <div className={classes.homeDescription1}>
                <p className={classes.descriptionLabel}>
                    The ultimate solution for all your Grama Sevaka letter needs!
                </p>
            </div>
            <div className={classes.homeDescription2}>
                <p className={classes.descriptionLabel}>
                    Our app is designed to make it easy for you to get a Grama Sevaka letter without the hassle of visiting the Grama Sevaka office.
                </p>
            </div>
            <div className={classes.homeImage}>
                <img src={homeImage} alt="HomeImage" className={classes.homeIcon} />
            </div>
            <button className={classes.homeApplyButton} onClick={handleClick}>
                <div className={classes.applyButton}></div>
                <div className={classes.applyFrame}>
                    {isAdmin ? (
                        <div className={classes.applyDescription}>Dashboard</div>
                    ) : (
                        <div className={classes.applyDescription}>APPLY</div>
                    )}
                        <div className={classes.applyIcon}>
                        <img src={arrowIcon} alt="ArrowIcon" className={classes.homeIcon} />
                    </div>
                </div>
            </button> 
        </div>
    );

}