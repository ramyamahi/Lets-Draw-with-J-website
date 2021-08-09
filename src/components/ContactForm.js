import React from 'react';
import emailjs from "emailjs-com"; 

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const ContactForm = () => {

    function sendEmail(e) {
       e.preventDefault();
       emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
       .then((result) => {
    //    console.log(result.text);
       }, (error) => {
    //    console.log(error.text);
       });
       e.target.reset()
   } 

    return (
        <React.Fragment>            
            <h3>Send Message Me</h3>
                <form onSubmit={sendEmail}>
                    <input type="text" name="firstname" placeholder="Your First Name" required/><br/>
                    <input type="text" name="lastname" placeholder="Your Last Name" required/><br/>
                    <input type="email" name="email" placeholder="Your Email" required/><br/>
                    <input type="number" name="contact" placeholder="Your Contact No" required/><br/>
                    <textarea name="message" rows="4" cols="50" placeholder="Your Message" required></textarea><br/>
                    <button className="send-btn">Send Message</button>
                </form>
        </React.Fragment>
    );
}

export default ContactForm;