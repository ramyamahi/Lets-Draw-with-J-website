import React from 'react';
import { surveys } from '../../data';

const SurveyCard = () => {
    return (
        <div className="survey-container">            
            { surveys.map((survey) => {
                const { id, count, title, icon} = survey;
                return (
                    <div className="survey" key={id}>
                        <h3><span className="survey-icon">{icon}</span></h3>
                        <h5 className="count">{count}</h5>
                        <p className="survey-title">{title}</p>
                    </div>              
                );
            })}           
        </div>   
    );
}

export default SurveyCard;