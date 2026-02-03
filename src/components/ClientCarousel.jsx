import React, { useState } from 'react';
import udupiLogo from '../assets/udupi_upahar_logo.png';
import tajLogo from '../assets/taj_banjara.png';
import syndicateLogo from '../assets/syndicate_bank.png';
import suprabhatLogo from '../assets/suprabhat.png';

// Importing newly moved logos
import htcLogo from '../assets/logos/htc.png';
import ohrisLogo from '../assets/logos/ohris.png';
import corpbankLogo from '../assets/logos/corpbank.png';
import pistaLogo from '../assets/logos/pista.png';
import rachemLogo from '../assets/logos/rachem.png';
import zuariLogo from '../assets/logos/zuari.png';
import amdLogo from '../assets/logos/amd.png';
import vasaviLogo from '../assets/logos/vasavi.png';
import megasoftLogo from '../assets/logos/megasoft.png';
import resourceOneLogo from '../assets/logos/resource_one.png';
import cokarmaLogo from '../assets/logos/cokarma.png';
import navayugaLogo from '../assets/logos/navayuga.png';
import xiusLogo from '../assets/logos/xius.png';

import { Building2, Home } from 'lucide-react';
import './ClientCarousel.css';

const clients = [
    { name: "Swathi Group of Hotels", logo: null },
    { name: "HTC Global Services", logo: htcLogo },
    { name: "Taj Banjara", logo: tajLogo }, // Added at prominent position 3
    { name: "Ohris Group", logo: ohrisLogo },
    { name: "Corporation Bank", logo: corpbankLogo },
    { name: "Resource One", logo: resourceOneLogo },
    { name: "CoKarma", logo: cokarmaLogo },
    { name: "Syndicate Bank", logo: syndicateLogo }, // Added
    { name: "Pista House", logo: pistaLogo },
    { name: "Navayuga Infotech", logo: navayugaLogo },
    { name: "XIUS", logo: xiusLogo },
    { name: "RA CHEM Pharma", logo: rachemLogo },
    { name: "Udupi Upahar", logo: udupiLogo },
    { name: "Hotel Suprabhat", logo: suprabhatLogo },
    { name: "Hotel NKM’s Grand", logo: null },
    { name: "Zuari Cement", logo: zuariLogo },
    { name: "AMD", logo: amdLogo },
    { name: "Yatri Nivas", logo: null },
    { name: "Vasavi Engineering College", logo: vasaviLogo },
    { name: "Megasoft Technologies", logo: megasoftLogo },
    {
        name: "Trusted by 5,000+ Domestic Households",
        logo: null,
        isSpecial: true,
        icon: <Home size={28} />
    }
];

const ClientCard = ({ client }) => {
    const [imgError, setImgError] = useState(false);

    // Specific logos that need to be larger to match others visually
    const isSmallLogo = client.name === "HTC Global Services" || client.name === "Ohris Group" || client.name === "Zuari Cement" || client.name === "Navayuga Infotech" || client.name === "XIUS";

    // Specific logos that need to be medium (20% bigger)
    const isMediumLogo = client.name === "Taj Banjara" || client.name === "CoKarma";

    // Specific logos that need to be smaller (AMD is too big)
    const isLargeLogo = client.name === "AMD";

    // Specific padding for Resource One
    const isResourceOne = client.name === "Resource One";

    let logoClass = "client-logo";
    if (isSmallLogo) logoClass += " logo-enlarged";
    if (isMediumLogo) logoClass += " logo-medium";
    if (isLargeLogo) logoClass += " logo-reduced";
    if (isResourceOne) logoClass += " logo-padded";

    // Special styling for the "Domestic Households" card
    if (client.isSpecial) {
        return (
            <div
                className="client-card special-card"
                title={client.name}
                style={{
                    background: 'linear-gradient(135deg, #FFB700 0%, #FF8C00 100%)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    border: 'none',
                    padding: '1rem'
                }}
            >
                <div style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                    {client.icon}
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.3 }}>
                    {client.name}
                </span>
            </div>
        );
    }

    return (
        <div className="client-card" title={client.name}>
            {client.logo && !imgError ? (
                <>
                    <img
                        src={client.logo}
                        alt={client.name}
                        className={logoClass}
                        onError={() => setImgError(true)}
                    />
                    <div className="client-tooltip">{client.name}</div>
                </>
            ) : (
                <div className="client-fallback">
                    <Building2 size={24} className="client-icon" />
                    <span className="client-text">{client.name}</span>
                </div>
            )}
        </div>
    );
};

const ClientCarousel = () => {
    return (
        <section className="section bg-white client-section">
            <div className="container text-center">
                <h2 className="section-title">Trusted By Industry Leaders</h2>
                <p className="section-subtitle">Delivering excellence to 400+ satisfied clients</p>

                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {/* Triple the list for smoother infinite loop on wide screens */}
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <div key={index} className="client-slide">
                                <ClientCard client={client} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
