import React from 'react';
import { Shield, Home, Factory, Bug, AlertTriangle, CloudRain, MousePointer2, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ title, icon, children }) => (
    <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid var(--color-border)',
        height: '100%',
        transition: 'transform 0.2s'
    }} className="hover-card">
        <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 700 }}>{title}</h3>
        <div style={{ color: '#4A5568', lineHeight: '1.6' }}>{children}</div>
    </div>
);

const Services = () => {
    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '5rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>Our Services</h1>
                    <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Equipped to handle all types of Pest Elimination with HACCP-certified safety standards.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>

                    <ServiceCard title="Anti-Termite Treatment" icon={<Home size={40} />}>
                        <p>Treatment against termites, divided into two specialized categories:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Pre-Construction:</strong> Soil treatment before construction. One of the best ways to prevent termite infestations on the lumber usage.</li>
                            <li><strong>Post-Construction:</strong> Treatment of premises after construction to protect structural integrity.</li>
                        </ul>
                    </ServiceCard>

                    <ServiceCard title="Disinfectation" icon={<Shield size={40} />}>
                        <p>
                            Comprehensive insecticidal spray treatments against a wide range of common pests including bugs, flies, spiders, lizards, and mosquitoes.
                            Ensures a hygienic environment for homes and offices.
                        </p>
                    </ServiceCard>

                    <ServiceCard title="Anti-Cockroach Amalgam" icon={<Bug size={40} />}>
                        <p>
                            A specialized treatment specific only to cockroaches.
                            Uses targeted gel and bait treatments perfect for commercial kitchens and sensitive areas where sprays are avoided.
                        </p>
                    </ServiceCard>

                    <ServiceCard title="Anti Wood Borer" icon={<Factory size={40} />}>
                        <p>
                            Specialized preservation treatments for wooden fixtures and furniture to prevent Borers from destroying expensive woodwork.
                        </p>
                    </ServiceCard>

                    <ServiceCard title="Mosquito Eradication and Control" icon={<CloudRain size={40} />}>
                        <p>
                            Comprehensive management of mosquito populations in large open areas.
                            Ideal for campuses, gardens, and industrial compounds to reduce vector-borne disease risks using methods like fogging and larvicide.
                        </p>
                    </ServiceCard>

                    <ServiceCard title="Rodent Control" icon={<MousePointer2 size={40} />}>
                        <p>
                            Eradication of rats and mice using the ERD principle.
                            We focus on trapping and exclusion to keep your facility rodent-free.
                        </p>
                    </ServiceCard>
                </div>

                <div className="bg-off-white" style={{ padding: '4rem 2rem', borderRadius: '12px', textAlign: 'center' }}>
                    <h2 className="text-primary" style={{ marginBottom: '2rem', fontSize: '2rem' }}>IPCS as your Service Provider</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ul className="benefit-list" style={{ listStyle: 'none', textAlign: 'left', maxWidth: '800px' }}>
                            {[
                                "Fully trained, experienced and qualified surveyors and technicians",
                                "Demonstration of recognised Health & Safety procedures",
                                "Application of the Exclusion Restriction, Destruction (ERD)",
                                "Detailed, clear and concise reporting & recommendations",
                                "Helping to save your time and money"
                            ].map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                    <ShieldCheck size={24} className="text-primary" style={{ flexShrink: 0 }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
