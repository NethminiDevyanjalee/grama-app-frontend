import resets from '../resets.module.css';
import classes from './Application.module.css';
import submitIcon from '../../assets/images/submitIcon.png';
import applicationImage from '../../assets/images/applicationImage.svg';

export default function Application() {
    return(
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.applicationHeader}>Application</div>
            <div className={classes.applicationDescription}>Apply today for the Grama Certificate</div>
            <button className={classes.applicationSubmitButton}>
                <div className={classes.submitButton}></div>
                <div className={classes.submitFrame}>
                    <div className={classes.submitDescription}>Submit</div>
                    <div className={classes.submitIcon}>
                        <img src={submitIcon} alt="SubmitIcon" className={classes.applicationIcon} />
                    </div>
                </div>
            </button>
            <div className={classes.applicationImage}>
                <img src={applicationImage} alt="ApplicationImage" className={classes.applicationIcon} />
            </div>
            <div className={classes.formFrame}>
                <div className={classes.formField}>
                    <div className={classes.formLabel}>ID</div>
                    <div className={classes.formInput}></div>
                </div>
                <div className={classes.formField}>
                    <div className={classes.formLabel}>Address</div>
                    <div className={classes.formInput}></div>
                </div>
            </div>
            <div className={classes.applicationFormFrame }></div>
        </div>
    );

}