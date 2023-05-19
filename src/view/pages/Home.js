import main from '../main.module.css';
import classes from './Home.module.css';
import homeImage from '../../assets/images/homeImage.svg';
import arrowIcon from '../../assets/images/arrowIcon.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

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
            <button className={classes.homeApplyButton} onClick={() => navigate('/apply')}>
                <div className={classes.applyButton}></div>
                <div className={classes.applyFrame}>
                    <div className={classes.applyDescription}>APPLY</div>
                    <div className={classes.applyIcon}>
                        <img src={arrowIcon} alt="ArrowIcon" className={classes.homeIcon} />
                    </div>
                </div>
            </button> 
        </div>
    );

}