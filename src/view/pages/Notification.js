import customerSupport from '../../assets/images/customer_support.png'
import './notification.page.css'
import envelope from '../../assets/images/envelope.png'

function Notification() {
    return (
        <div>
            <div className="notificationPage">
                
                <div className="leftColumn">
                    <h1>Need some Help?</h1>
                    <h2>Just write us a message!</h2>
                    <h3>Fill up the form and our team will get back to<br></br> you within 24 hours.</h3>
                    <p>Message</p>
                    <textarea placeholder="Write your message..."></textarea>
                    <button>
                        Send
                        <img src={envelope} className="icon"></img>
                    </button>
                </div>
                <div className="rightColumn">
                    <img src={customerSupport} alt="Customer Support" />
                </div>
            </div> 
            <p className="copyright">Copyright @2023</p>        
        </div>
    );
}

export default Notification;