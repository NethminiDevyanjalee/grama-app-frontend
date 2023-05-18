import React from 'react';
import community from '../../assets/images/community.png'
import './landing_page.css'
import arrowIcon from '../../assets/images/arrow-right.png'

function Landing() {

    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <img src={community} className='background-img' alt='Community'></img>
            <div className="page-layout">
                <div className="landing-left-column">
                    <h1 className="landing-title">GRAMA APP</h1>
                    <h2 className="landing-subtitle">The ultimate solution<br></br> for all your Grama Sevaka letter needs!</h2>
                    <button onClick={handleClick}>
                        LOGIN
                        <img src={arrowIcon} className="arrow-icon" alt="Envelope Icon"></img>
                    </button>
                </div>
            </div> 
            <p className="copyright">Copyright @2023</p>        
        </div>
    );
}

export default Landing;