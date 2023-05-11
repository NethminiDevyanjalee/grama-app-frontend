import resets from '../resets.module.css';
import classes from './Application.module.css';
import submitIcon from '../../assets/images/submitIcon.png';
import applicationImage from '../../assets/images/applicationImage.svg';

export default function Application() {
    return(
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.application}>Application</div>
            <div className={classes.copyright2023}>
                <p className={classes.labelWrapper}>
                    <span className={classes.label}>C</span>
                    <span className={classes.label2}>opyright @2023</span>
                </p>
            </div>
            <div className={classes.applyTodayForTheGramaCertifica}>Apply today for the Grama Certificate</div>
            <button className={classes.saveButton}>
                <div className={classes.saveButton2}></div>
                <div className={classes.saveButton3}></div>
                <div className={classes.frame46}>
                    <div className={classes.submit}>Submit</div>
                    <div className={classes.envelope}>
                        <img src={submitIcon} alt="SubmitIcon" className={classes.icon4} />
                    </div>
                </div>
            </button>
            <div className={classes.undraw_personal_file_re_5joy1}>
                <img src={applicationImage} alt="ApplicationImage" className={classes.icon5} />
            </div>
            <div className={classes.frame51}>
                <div className={classes.frame49}>
                    <div className={classes.iD}>ID</div>
                    <div className={classes.firstNameBox}></div>
                </div>
                <div className={classes.frame50}>
                    <div className={classes.address}>Address</div>
                    <div className={classes.firstNameBox2}></div>
                </div>
            </div>
            <div className={classes.editProfile}></div>
        </div>
    );

}