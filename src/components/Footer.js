import React from 'react';

const Footer = ({text = 'Created by TG'}) => (
    <div style={{backgroundColor: '#363732'}}>
       <p>{text}</p>
    </div>
);

export default Footer;