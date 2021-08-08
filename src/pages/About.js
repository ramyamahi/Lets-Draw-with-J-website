import React from 'react'
import { AiOutlineRight  } from 'react-icons/ai'

const About = () => {
    return (
        <div className="about-container">
            <h4>Hello There!</h4>
            <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p><br/>
            <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p><br/>
            <h5 className="about-arrow"><span><AiOutlineRight /></span> Drawings,Paintings</h5>
            <h5 className="about-arrow"><span><AiOutlineRight /></span> Caricature Work</h5>
            <h5 className="about-arrow"><span><AiOutlineRight /></span> Watercolor Paintings</h5>
            <h5 className="about-arrow"><span><AiOutlineRight /></span> Oil Paintings</h5>
            <h5 className="about-arrow"><span><AiOutlineRight /></span> Acrylic Paintings</h5>
        </div>
    )
}

export default About