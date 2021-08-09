import React from 'react'
import { BiMap } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import SocialIcons from '../components/SocialIcons';
import ContactForm from '../components/ContactForm'

const Contact = () => {

    return (
        <section className="contact-section">
            <div>
                <h3>Get in Touch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                <h4><span><BiMap /></span> Coimbatore, Tamilnadu</h4>
                <h4><span><BsPhone /></span> +91 9843085562</h4>
                <h4><span><HiOutlineMail /></span> jegankosi@gmail.com</h4><br />
                <ul className='contact-social-icons'>
                    <SocialIcons />
                </ul>
            </div>
            <div>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact