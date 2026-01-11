import React from 'react';
import { Quote, Target, Eye, Users, History, Award, Heart } from 'lucide-react';
import srikanthImage from '../assets/srikanth-rai.png';
import vikhyathImage from '../assets/vikhyath-rai.jpg';

const About = () => {

    // Reusable Flip Card Component
    const FlipCard = ({ title, subTitle, summary, icon: Icon, children, color = 'var(--color-primary)', style }) => (
        <div className="flip-card" style={style}>
            <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                    <div className="icon-wrapper">
                        <Icon size={48} />
                    </div>
                    <h3>{title}</h3>
                    <p>{summary || subTitle}</p>
                    <div style={{ marginTop: 'auto', color: color, fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Read Details →
                    </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back" style={{ backgroundColor: color }}>
                    <div className="scroll-content">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem' }}>
                            {title}
                        </h3>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );

    const LeadershipCard = ({ name, role, quote, summary, image, imagePosition = 'center top', imageScale = 1, children, style }) => (
        <div className="flip-card" style={style}>
            <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front">
                    {image ? (
                        <div style={{
                            width: '180px', height: '180px', borderRadius: '50%',
                            marginBottom: '1.5rem',
                            border: '6px solid #F1F5F9',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img
                                src={image}
                                alt={name}
                                style={{
                                    width: '100%', height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: imagePosition,
                                    transform: `scale(${imageScale})`
                                }}
                            />
                        </div>
                    ) : (
                        <div style={{
                            background: '#F1F5F9', width: '80px', height: '80px', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                            color: '#64748B'
                        }}>
                            <Users size={40} />
                        </div>
                    )}
                    <h3>{name}</h3>
                    <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{role}</p>
                    <p style={{ fontSize: '0.95rem' }}>{summary}</p>
                    <div style={{ marginTop: 'auto', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        View Full Bio →
                    </div>
                </div>

                {/* Back */}
                <div className="flip-card-back" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <div className="scroll-content">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            {image && (
                                <div style={{
                                    width: '90px', height: '90px', borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    overflow: 'hidden',
                                    flexShrink: 0
                                }}>
                                    <img
                                        src={image}
                                        alt={name}
                                        style={{
                                            width: '100%', height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: imagePosition,
                                            transform: `scale(${imageScale})`
                                        }}
                                    />
                                </div>
                            )}
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{name}</h3>
                                <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{role}</p>
                            </div>
                        </div>

                        <Quote size={24} style={{ opacity: 0.5, marginBottom: '0.5rem' }} />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>About Us</h1>
                    <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Hover over any card to explore our story, our leaders, and our values in detail.
                    </p>
                </div>

                <div className="grid-container">

                    {/* 1. History */}
                    <FlipCard
                        title="Our History"
                        summary="Founded in 1982. Over 40 years of trust, legacy, and leadership in pest control across Hyderabad and Secunderabad including our commitment to Green Pest Management."
                        icon={History}
                        style={{ height: '350px' }}
                    >
                        <p style={{ marginBottom: '1rem' }}>
                            Since its founding in Hyderabad in 1982, Industrial Pest Control Services has become one of the
                            leading firm rendering the Pest Control Services in and around Hyderabad and Secunderabad.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            We are also one amongst the few Pest Control firms in Hyderabad that provides <strong>“Green Pest Management”</strong> using “natural” pesticides.
                            With a rich experience, a committed team of diligent and experts we are capable of catering our services to the various clients spread widely.
                        </p>
                        <p>
                            On the request of the clients, if required, we as a firm provide the Certificate of the Service, that
                            will hold good for the time period mentioned in the certificate.
                        </p>
                    </FlipCard>

                    {/* 2. Management: Srikanth */}
                    <LeadershipCard
                        name="Srikanth Rai"
                        role="MD and Proprietor"
                        image={srikanthImage}
                        imagePosition="center 15%"
                        imageScale={1.0}
                        style={{ height: '520px' }}
                        summary="40+ years leading IPCS. A hands-on leader building trust through reliability, care, and a people-first approach."
                    >
                        <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
                            "Srikanth Rai has been leading Industrial Pest Control Services for over 40 years. Licensed, experienced, and deeply hands-on, he has built long-standing trust with customers across Hyderabad through reliability, clear communication, and genuine care. Known for his people-first approach, he continues to personally guide the team to deliver safe, effective, and dependable pest control solutions."
                        </p>
                    </LeadershipCard>

                    {/* 3. Management: Vikhyath */}
                    <LeadershipCard
                        name="Vikhyath Rai"
                        role="Head, Operations"
                        image={vikhyathImage}
                        imagePosition="center top"
                        imageScale={1.2}

                        style={{ height: '520px' }}
                        summary="Engineering + MBA (BITSoM). Focused on operational excellence, service delivery, and expanding the company's professional presence."
                    >
                        <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
                            "Vikhyath has a background in engineering and later earned his MBA from BITS School of Management (BITSoM). At Industrial Pest Control Services, he leads Customer Success and Operations, with a focus on improving service delivery, strengthening operational processes, and ensuring a consistent customer experience. He has represented IPCS in business forums and professional networks, helping expand the company’s presence while staying aligned with the values, trust, and customer relationships built over more than 40 years."
                        </p>
                    </LeadershipCard>

                    {/* 4. Mission */}
                    <FlipCard
                        title="Our Mission"
                        summary="To provide the highest quality service of unmatched value through a dedicated and trained workforce."
                        icon={Target}
                        color="#004B8D" // Lighter blue
                    >
                        <p>
                            At Industrial Pest Control Services, it is our mission to provide the highest quality service of
                            unmatched value to our clients through the efforts of a highly dedicated, trained and productive
                            workforce who share a commitment to long term growth and success of the company.
                        </p>
                    </FlipCard>

                    {/* 5. Vision */}
                    <FlipCard
                        title="Our Vision"
                        summary="To be a company of caring professional people, delivering only the best class of service."
                        icon={Eye}
                        color="#004B8D"
                    >
                        <p>
                            To be a company of caring professional people, delivering only the best class of service.
                        </p>
                    </FlipCard>

                    {/* 6. Purpose */}
                    <FlipCard
                        title="Our Purpose"
                        summary="Managing operations with care for health, cleanliness, and safety to build a reliable future."
                        icon={Heart}
                        color="#D97706" // Amber accent
                    >
                        <p>
                            We work smart to manage our operations with care for the health, cleanliness, safety and
                            prosperity of our employees, customers, communities and the environment. Through systems
                            review and open communications, we work to continuously improve outcomes and build
                            reliable future generation.
                        </p>
                    </FlipCard>

                    {/* 7. People (Wide) */}
                    <div className="flip-card wide-card" style={{ height: '320px' }}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front" style={{ flexDirection: 'row', gap: '2rem', textAlign: 'left', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '3rem' }}>
                                <div style={{
                                    background: '#F1F5F9', width: '80px', height: '80px', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)'
                                }}>
                                    <Users size={40} />
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Our People</h3>
                                    <p style={{ color: '#64748B' }}>The right people for the right job. Experts executing Integrated Pest Management (IPM).</p>
                                </div>
                                <div style={{ marginLeft: 'auto', marginRight: '3rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                                    Read More →
                                </div>
                            </div>
                            <div className="flip-card-back" style={{ backgroundColor: 'var(--color-primary)' }}>
                                <div className="scroll-content">
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Our People</h3>
                                    <p style={{ marginBottom: '1.5rem' }}>
                                        We make sure that we have the right people for the right job and the right attitude to getting it
                                        done. So when we say that IPCS is a caring company delivering only the best class of service, we
                                        really mean it!
                                    </p>
                                    <p>
                                        Our team of experts has in-depth knowledge and hands-on experience in their respective domains.
                                        Our service is based on the principles of <strong>Integrated Pest Management (IPM)</strong>,
                                        executed by trained pest management professionals (PMPs).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                /* 1. History (Full Width) */
                .grid-container > div:nth-child(1) { grid-column: span 12; }
                
                /* 2. Management (Half Width each) */
                .grid-container > div:nth-child(2) { grid-column: span 6; }
                .grid-container > div:nth-child(3) { grid-column: span 6; }
                
                /* 3. Values (Third Width each) */
                .grid-container > div:nth-child(4) { grid-column: span 4; }
                .grid-container > div:nth-child(5) { grid-column: span 4; }
                .grid-container > div:nth-child(6) { grid-column: span 4; }
                
                /* 4. People (Full Width) */
                .grid-container > div:nth-child(7) { grid-column: span 12; }

                @media (max-width: 1024px) {
                    .grid-container > div:nth-child(2), .grid-container > div:nth-child(3) { grid-column: span 12; }
                    .grid-container > div:nth-child(4), .grid-container > div:nth-child(5), .grid-container > div:nth-child(6) { grid-column: span 12; }
                }

                .flip-card {
                    background-color: transparent;
                    height: 450px; /* Taller for summary */
                    cursor: pointer;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.2s cubic-bezier(0.4, 0.0, 0.2, 1); /* Fast 2D toggle */
                    transform-style: preserve-3d;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    border-radius: 12px;
                }

                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }

                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 12px;
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .flip-card-front {
                    background-color: white;
                    color: var(--color-text-dark);
                    border: 1px solid #E2E8F0;
                    align-items: flex-start;
                    text-align: left;
                    padding: 2rem;
                }
                
                .flip-card-front h3 {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    color: var(--color-primary);
                    font-weight: 700;
                }
                
                .flip-card-front p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #64748B;
                    margin-bottom: 0;
                }
                
                .flip-card-front .icon-wrapper {
                   margin-bottom: 1.5rem;
                   color: var(--color-primary);
                }

                .flip-card-back {
                    color: white;
                    transform: rotateY(180deg);
                    text-align: left;
                    align-items: flex-start;
                    justify-content: flex-start;
                    background-image: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
                    padding: 2rem;
                }

                .scroll-content {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    padding-right: 8px;
                }
                
                .scroll-content::-webkit-scrollbar {
                    width: 4px;
                }
                .scroll-content::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.1);
                }
                .scroll-content::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.5);
                    border-radius: 2px;
                }
            `}} />
        </div>
    );
};

export default About;
