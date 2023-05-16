import customerSupport from '../../assets/images/customer_support.png'
import './help_page.css'
import envelope from '../../assets/images/envelope.png'
import Swal from 'sweetalert2'
import React, { useState } from 'react'

function Help() {

    //const apiKey = process.env.REACT_APP_API_KEY;

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
            const apiUrl = 'https://ebec18ec-b7dc-4ea3-8dcd-ae4ded23340a-dev.e1-us-east-azure.choreoapis.dev/gewp/grama-app/endpoint-9090-803/2.0.0/sendMessage'; 
            const queryParams = `?user_message=${encodeURIComponent(message)}`;
            const url = apiUrl + queryParams;

            fetch(url, {
                method: 'POST',
                headers: {
                'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyOWYyNmI4MS0xY2YwLTQzOWUtYjI5OS0wNGNiODFkODg3MDdAY2FyYm9uLnN1cGVyIiwiaXNzIjoiaHR0cHM6XC9cL3N0cy5jaG9yZW8uZGV2OjQ0M1wvb2F1dGgyXC90b2tlbiIsImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJHcmFtYSBBcHAgLSBFbmRwb2ludCA5MDkwIDgwMyIsImNvbnRleHQiOiJcL2ViZWMxOGVjLWI3ZGMtNGVhMy04ZGNkLWFlNGRlZDIzMzQwYVwvZ2V3cFwvZ3JhbWEtYXBwXC9lbmRwb2ludC05MDkwLTgwM1wvMi4wLjAiLCJwdWJsaXNoZXIiOiJjaG9yZW9fcHJvZF9hcGltX2FkbWluIiwidmVyc2lvbiI6IjIuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE2ODQyMTk3ODgsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTY4NDIxOTE4OCwianRpIjoiOTdhMDEwMzAtMWIyZi00N2ZkLWFhMDctMmYwNTQ5ZDgwZDY3In0.Ux9aGQbWAdCeJq7dKcxCa53H9UMJlGZh_SrvWgoIV2N7vqicz_F2RylUtb55jPbUOUWQnJHF-nPh6M3Hx8uzMVlmQ2NDxa4GVBcHJhyydtyERHpR-fA0cgW1_L7GfQwIKn6QiDRDVWYtUBhqAlTerQr9xPIciTCa9B2wXcs7mOOIDtu2JRilrbI6JAv6PNkxlM67a5ZOKigFbaLYoiOJHDH4fqUEOvXJDik3DZvgl9ay4NCUT0o2D33E9qtj80kpOeVtWtlzptNjqbQ5RE-k93VpMHaNR5NX-VxpRqSg8T-Il_NHLjTt-SJ-NU_b867wmIwrhzhmrRjdqZxjbE5i5folf-fK73ufSOD-h5sEkc3grtEEcrwVH_fUPAKpV9BuITRrCqzkUXPtr7oZPaER6KfSwEvLgy_HtrgqHHS9LWQ5AukFl9GU8jg6r-tZKZ6UYUd-uHVoAgBpdDDMis8Vn2f5MN7VifotXXCczZB3cO9uOBYgQtDu1G6L4uotZTsEyM1tSun8fJtr4cq0S7tMNaFHrPy6gJEuqp077hbShB26G77cIe2VOjPSJdhY9k3i-lTVLP_meQZE_4GugikK0QgXQtCUnL34LXXDM5gtJdyXhD_JQRCmAYCt1xztgjC7H4qv7SB4N_7Bdch1Bzemtglz6VrGaciUtbiTGiSsW8g',
                'accept': 'text/plain'
            },
            })
                .then((response) => {
                    if (response.ok) {
                    Swal.fire({
                        title: 'Message Sent',
                        text: 'Your message has been sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                    setMessage(''); 
                    } else {
                    throw new Error('Unauthorized');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    Swal.fire({
                    title: 'Error',
                    text: 'Failed to send the message. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    });
                });
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