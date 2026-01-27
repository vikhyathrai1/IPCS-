import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

import landingImage from '../assets/Landing_equipment.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-pattern"></div>
            <div className="container hero-content">
                <div className="hero-text fade-in">
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        <span className="hero-badge" style={{ marginBottom: 0 }}>★ Est. 1982</span>
                        <span className="hero-badge" style={{ marginBottom: 0 }}>📍 Hyderabad, Secunderabad & Wider Telangana</span>
                    </div>
                    <h1>Pest Management Experts</h1>
                    <p>
                        Since 1982, we have been the <span style={{ fontWeight: 800 }}>leading provider of Industrial Pest Control</span> in Hyderabad. We use <span style={{ fontWeight: 800 }}>HACCP-approved Green Pest Management</span> and natural pesticides to eliminate infestations in factories, hotels, and corporate offices. With 40+ years of experience, we provide the <span style={{ fontWeight: 800 }}>most reliable, high-standard pest removal</span> in Telangana.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn-primary">
                            Request a free inspection <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="btn-secondary">
                            Explore Services
                        </Link>
                    </div>
                </div>
                <div className="hero-visual fade-in" style={{ animationDelay: '0.2s' }}>
                    <img src={landingImage} alt="Pest Control Equipment" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
