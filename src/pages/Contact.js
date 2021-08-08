import React from 'react'
import { BiMap  } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import SocialIcons from '../components/SocialIcons';


const Contact = () => {
    return (
        <section className="contact-section">
            <div>
                <h3>Get in Touch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                <h4><span><BiMap /></span> Coimbatore, Tamilnadu</h4>
                <h4><span><BsPhone /></span> +91 9843085562</h4>
                <h4><span><HiOutlineMail /></span> jegankosi@gmail.com</h4><br/>
                <ul className='contact-social-icons'>          
                    <SocialIcons />
                </ul>
            </div>
            <div>
                <h3>Send Message Me</h3>
                <form>
                    <input type="text" name="firstname" placeholder="Your First Name"/><br/>
                    <input type="text" name="lastname" placeholder="Your Last Name"/><br/>
                    <input type="email" name="email" placeholder="Your Email"/><br/>
                    <textarea name="message" rows="4" cols="50">Your message</textarea><br/>
                    <button className="send-btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact