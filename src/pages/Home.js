import React from 'react'
import profile from '../assets/images/profile.jpeg'
import caricature from '../assets/caricature.mp4'
import Reviews from '../components/Reviews'
import ServiceCard from '../components/Home/ServiceCard'
import SurveyCard from '../components/Home/SurveyCard'

const Home = () => {
    return (
        <div>
            <div className="nav-top">
                <div className="overlay"></div>           
                <div className="nav-top-container">
                    <img src={profile} alt="Jegan" className="profile"/>                
                    <h2 className="name">Hi, I'm Jegan</h2>
                    <h4 className="profession">Sketcher / Designer / Pencil Artist</h4>
                    <h4 className="profession">Graphic designer</h4>     
                </div>   
            </div>                    
            <ServiceCard />
            <SurveyCard />
            <div className="caricature-container">
                <div className="caricature">
                    <h3 className="caricature-title">Caricature Art</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.</p>
                </div>
                <div className="caricature-video">
                    <video src={caricature} width="320" height="240" autoPlay muted>
                    </video>
                </div>
            </div>
            <Reviews />
        </div>
    )
}

export default Home