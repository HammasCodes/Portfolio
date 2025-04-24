import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cf021824-61d4-40ce-a74e-ad62a660cbbc");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log(data); // Debugging: Log the API response

            if (data.success) {
                alert(data.message)
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred while submitting the form.");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>hammasansari641@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>INDIA, UTTAR PRADESH, BAREILLY</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+916395351408</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name" required />
                    <label htmlFor="email">Your E-mail</label>
                    <input type="email" placeholder='Enter your E-mail' name="email" required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
            {result && <p>{result}</p>} {/* Display the result message */}
        </div>
    );
};

export default Contact;