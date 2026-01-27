import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <div className="brand-logo">
                        {/* Simple Text Logo for Footer */}
                        <h2>Industrial Pest Control Services</h2>
                    </div>
                    <p className="brand-desc">
                        Since 1982, we have been the leading provider of Industrial Pest Control in Hyderabad. We use HACCP-approved Green Pest Management and natural pesticides to eliminate infestations in factories, hotels, and corporate offices. With 40+ years of experience, we provide the most reliable, high-standard pest removal in Telangana.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="icon" />
                            <span>
                                #3-3-50/1/A/V7, Ground Floor,<br />
                                Amrutha Arcade, Kachiguda,<br />
                                Hyderabad 500027
                            </span>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <div className="phones">
                                <a href="tel:+919849000797">+91-9849000797</a>
                                <a href="tel:+919849204269">+91-9849204269</a>
                            </div>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <a href="mailto:indpest@yahoo.co.in">indpest@yahoo.co.in</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Industrial Pest Control Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
