import React  from 'react';
import './contact.styles.scss';

const Contact = () => (
    <div className='contact'>
        <h1>Contact Us</h1>
        <div><a className='email' href="mailto:mhelvinreyes26@gmail.com">message me via email</a></div>
        <div><a className='messenger' target='_blank' href="http://m.me/reyesmhelvino">message me @ facebook</a></div>
    </div>
);

export default Contact;