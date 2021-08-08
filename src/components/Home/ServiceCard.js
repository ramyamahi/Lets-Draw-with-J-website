import React from 'react';
import { services } from '../../data';

const ServiceCard = () => {
    return (
        <div className="services">            
            <h3 className="service-title">Services</h3>  
            <div className="card-container">
                { services.map((service) => {
                    const { id, title, icon, desc} = service;
                    return (
                        <div className="service-card" key={id}>
                            <h3 className="service-icon"><span>{icon}</span></h3>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>                
                    );
                })}            
            </div>
        </div>
    );
}

export default ServiceCard;