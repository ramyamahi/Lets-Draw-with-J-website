import React from 'react';
import { social } from '../data';

const SocialIcons = () => {
    return (
        <React.Fragment>            
            { social.map((item) => {
                const { id, url, icon} = item;
                return (
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>           
                );
            })}           
        </React.Fragment>   
    );
}

export default SocialIcons;