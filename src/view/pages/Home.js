import resets from '../resets.module.css';
import classes from './Home.module.css';
import homeImage from '../../assets/images/homeImage.svg';
import arrowIcon from '../../assets/images/arrowIcon.png';

export default function Home() {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.welcomeToGRAMAAPP}>
                <p className={classes.labelWrapper}>
                    <span className={classes.label}>Welcome </span>
                    <span className={classes.label2}>to </span>
                    <span className={classes.label3}>gRAMA APP</span>
                </p>
            </div>
            <div className={classes.theUltimateSolutionForAllYourG}>
                <p className={classes.labelWrapper2}>
                    <span className={classes.label4}>t</span>
                    <span className={classes.label5}>he ultimate solution for all your </span>
                    <span className={classes.label6}>Grama Sevaka </span>
                    <span className={classes.label7}>letter needs! </span>
                </p>
                <div className={classes.textBlock}>
                    <p className={classes.labelWrapper3}></p>
                </div>
                <div className={classes.textBlock2}>
                    <p className={classes.labelWrapper4}>
                        <span className={classes.label8}>Our </span>
                        <span className={classes.label9}>app is designed to make it easy for you to get a </span>
                        <span className={classes.label10}>Grama Sevaka </span>
                        <span className={classes.label11}>LETTER WITHout the hassle of visiting the </span>
                        <span className={classes.label12}>Grama Sevaka </span>
                        <span className={classes.label13}>office</span>
                        <span className={classes.label14}>.</span>
                    </p>
                </div>
            </div>
            <div className={classes.copyright2023}>
                <p className={classes.labelWrapper5}>
                    <span className={classes.label15}>C</span>
                    <span className={classes.label16}>opyright @2023</span>
                </p>
            </div>
            <div className={classes.group5}>
                <img src={homeImage} alt="HomeImage" className={classes.icon} />
            </div>
            <button className={classes.saveButton}>
                <div className={classes.saveButton2}></div>
                <div className={classes.frame46}>
                    <div className={classes.aPPLY}>APPLY</div>
                    <div className={classes.vector}>
                        <img src={arrowIcon} alt="ArrowIcon" className={classes.icon5} />
                    </div>
                </div>
            </button> 
        </div>
    );

}