import customerSupport from '../../assets/images/customer_support.png'
import './help.page.css'
import envelope from '../../assets/images/envelope.png'

function Help() {
    return (
        <div>
            <div className="page-layout">
                <div className="help-left-column">
                    <h1>Need some Help?</h1>
                    <h2>Just write us a message!</h2>
                    <h3 className="help-description">
                        Fill up the form and our team will 
                        get back to<br></br> you within 24 hours.
                    </h3>
                    <p className="message-text">Message</p>
                    <textarea 
                        className="help-textarea" 
                        laceholder="Write your message...">
                    </textarea>
                    <button>
                        Send
                        <img src={envelope} className="send-icon" alt="Envelope Icon"></img>
                    </button>
                </div>
                <div className="help-right-column">
                    <img src={customerSupport} alt="Customer Support" />
                </div>
            </div> 
            <p className="copyright">Copyright @2023</p>        
        </div>
    );
}

export default Help;