import React from 'react';
import './ERDStrategy.css';
import { Shield, Lock, Zap } from 'lucide-react';

const ERDStrategy = () => {
    return (
        <section className="section section-erd">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">The ERD Strategy</h2>
                    <p className="section-subtitle">Our proactive philosophy for long-term pest management</p>
                </div>

                <div className="erd-grid">
                    <div className="erd-step">

                        <div className="step-icon">
                            <Shield size={32} />
                        </div>
                        <h3>Exclusion</h3>
                        <h4>Prevention First</h4>
                        <p>We identify and seal entry points to prevent pests from ever entering your premises.</p>
                    </div>

                    <div className="erd-step">

                        <div className="step-icon">
                            <Lock size={32} />
                        </div>
                        <h3>Restriction</h3>
                        <h4>Hospitability Management</h4>
                        <p>We advise on sanitation and structural modifications to deny pests food, water, and shelter.</p>
                    </div>

                    <div className="erd-step">

                        <div className="step-icon">
                            <Zap size={32} />
                        </div>
                        <h3>Destruction</h3>
                        <h4>Expert Eradication</h4>
                        <p>Targeted use of HACCP-certified chemicals and methods to eliminate any existing infestation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ERDStrategy;
