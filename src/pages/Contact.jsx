import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Phone Validation: 10 digits, starts with 6, 7, 8, or 9
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email address is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus('sending');

        // EmailJS Configuration
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Construct the custom message format requested
        const emailContent = `Dear Team,

You have received a new service inquiry via the website contact form. Below are the details of the potential client:

--------------------------------------------------
CLIENT DETAILS
--------------------------------------------------
Name         : ${formData.name}
Company      : ${formData.company || 'Not Provided'}
Phone Number : ${formData.phone}
Email Address: ${formData.email}

--------------------------------------------------
SERVICE REQUEST
--------------------------------------------------
Service Type : ${formData.service}

--------------------------------------------------
MESSAGE / QUERY
--------------------------------------------------
${formData.message}

--------------------------------------------------
Please contact this lead at your earliest convenience.

Best regards,
IPCS Website Notification System`;

        const templateParams = {
            to_email: '<mailid>', // Configure your EmailJS template to use {{to_email}} as the recipient
            from_name: formData.name,
            company_name: formData.company,
            phone: formData.phone,
            email: formData.email, // Passing email to template params as well
            service_type: formData.service,
            query: formData.message,
            message: emailContent // Use {{message}} in your EmailJS template to show the full formatted text
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', service: 'General Inquiry', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>Contact Us</h1>
                    <p className="text-secondary">Get a free inspection or quote for your facility today.</p>
                </div>

                <div className="contact-layout">

                    {/* Contact Info */}
                    <div style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', height: '100%' }}>
                        <h2 className="text-primary" style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>

                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1.5rem' }}>
                            <div className="icon-box" style={{ background: 'var(--color-bg-off-white)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Visit Us</h3>
                                <p style={{ color: '#4A5568' }}>
                                    #3-3-50/1/A/V7, Ground Floor,<br />
                                    Amrutha Arcade, Kachiguda,<br />
                                    Hyderabad 500027
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1.5rem' }}>
                            <div className="icon-box" style={{ background: 'var(--color-bg-off-white)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                <Phone className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Call Us</h3>
                                <p style={{ color: '#4A5568' }}>+91-9849000797</p>
                                <p style={{ color: '#4A5568' }}>+91-9849204269</p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1.5rem' }}>
                            <div className="icon-box" style={{ background: 'var(--color-bg-off-white)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                <Mail className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Email Us</h3>
                                <p style={{ color: '#4A5568' }}>indpest@yahoo.co.in</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div className="icon-box" style={{ background: '#dcfce7', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                <MessageCircle className="text-green-600" size={24} color="#16a34a" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>WhatsApp Us</h3>
                                <a
                                    href="https://wa.me/919849000797?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20commercial%20pest%20control%20services%20for%20my%20firm.%20%0ARequirement%20Details%3A%20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'white',
                                        background: '#25D366',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        marginTop: '0.25rem'
                                    }}
                                >
                                    Chat Now <Send size={14} style={{ transform: 'rotate(-45deg)' }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', height: '100%' }}>
                        <h2 className="text-primary" style={{ marginBottom: '1.5rem' }}>Request a Quote</h2>
                        <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* Row 1: Name & Company */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Full Name</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #E2E8F0', fontFamily: 'inherit' }}
                                        placeholder="Kiran Sharma"
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Company Name</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #E2E8F0', fontFamily: 'inherit' }}
                                        placeholder="Your Company Ltd."
                                    />
                                </div>
                            </div>

                            {/* Row 2: Phone & Email */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Phone Number</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: errors.phone ? '1px solid red' : '1px solid #E2E8F0', fontFamily: 'inherit' }}
                                        placeholder="98765 43210"
                                    />
                                    {errors.phone && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: errors.email ? '1px solid red' : '1px solid #E2E8F0', fontFamily: 'inherit' }}
                                        placeholder="you@company.com"
                                    />
                                    {errors.email && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                                </div>
                            </div>

                            {/* Row 3: Service Type */}
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Service Type</label>
                                <select name="service" value={formData.service} onChange={handleChange}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #E2E8F0', fontFamily: 'inherit', background: 'white' }}
                                >
                                    <option>General Inquiry</option>
                                    <option>Anti-Termite Treatment</option>
                                    <option>Cockroach Control</option>
                                    <option>Rodent Control</option>
                                    <option>Disinfectation</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #E2E8F0', fontFamily: 'inherit' }}
                                    placeholder="How can we help you? (Optional)"
                                ></textarea>
                            </div>

                            <button type="submit"
                                style={{
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    opacity: status === 'sending' ? 0.7 : 1,
                                    cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                                }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : <>{status === 'success' ? 'Request Received!' : 'Send Request'} {status !== 'success' && <Send size={18} />}</>}
                            </button>
                            {status === 'success' && <p style={{ color: 'green', textAlign: 'center', fontSize: '0.9rem' }}>Thank you! We'll contact you shortly.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
