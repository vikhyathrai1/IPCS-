import React from 'react';
import { ShieldCheck, Users, FlaskConical, UserCheck, Clock } from 'lucide-react';
import './TrustPillars.css';

const pillars = [
    {
        icon: <Clock size={40} />,
        title: "40+ Years of Business",
        desc: "A proven track record serving Hyderabad, Secunderabad and Telangana since 1982."
    },
    {
        icon: <Users size={40} />,
        title: "75+ Years Experience",
        desc: "Cumulative expertise of our dedicated, long-standing workforce."
    },
    {
        icon: <FlaskConical size={40} />,
        title: "HACCP Chemicals",
        desc: "Using only international, safety-approved products from Bayer & others."
    },
    {
        icon: <UserCheck size={40} />,
        title: "Government Licensed Company",
        desc: "company certified in urban integrated pest management"
    }
];

const TrustPillars = () => {
    return (
        <section className="section bg-off-white">
            <div className="container">
                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="pillar-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="pillar-icon">
                                {pillar.icon}
                            </div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustPillars;
