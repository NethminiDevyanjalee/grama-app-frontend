import customerSupport from '../../assets/images/customer_support.png';

function Notification() {
    return (
        <div className="notificationPage">
            <div className="leftColumn">
                <h1>Need some Help?</h1>
                <h2>Just write us a message!</h2>
                <p>Fill up the form and our team will get back to you within 24 hours.</p>
                <textarea placeholder="Write your message..."></textarea>
                <button>
                    <i className="icon"></i>
                    Send
                </button>
            </div>
            <div className="rightColumn">
                <img src={customerSupport} alt="Customer Support" />
            </div>
        </div>
    );
}

export default Notification;