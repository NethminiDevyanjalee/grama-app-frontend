import customerSupport from '../../assets/images/customer_support.png'
import './help_page.css'
import envelope from '../../assets/images/envelope.png'
import Swal from 'sweetalert2'
import React, { useState } from 'react'

function Help() {

    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim() === '') {
          Swal.fire({
            title: 'Empty Message',
            text: 'Please enter a message before sending.',
            icon: 'warning',
            confirmButtonText: 'OK',
          });
        } else {
          Swal.fire({
            title: 'Message Sent',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          setMessage(''); // Clear the message box
        }
    };
      

    return (
        <div>
            <div className="help-page-layout">
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
                        placeholder="Write your message..."
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                    <button onClick={handleSend}>
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