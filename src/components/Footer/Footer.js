import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <h4>Customer Service</h4>
                <p>Contact Us</p>
                <p>FAQ</p>
            </div>
            <div>
                <h4>About Company</h4>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
            </div>
            <div>
                <h4>For Business</h4>
                <p>Corporate</p>
                <p>Affiliate Program</p>
            </div>
        </div>
    );
};

export default Footer;