import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Header.css';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const Logo = () => (
    <Link to="/" className="logo-container" onClick={closeMenu}>
      <img src={logo} alt="IPCS Logo" className="logo-img" />
      <span className="logo-text">
        <span className="logo-title" style={{ fontSize: '1.2rem', lineHeight: '1.2', maxWidth: '200px' }}>Industrial Pest Control Services</span>
      </span>
    </Link>
  );

  const NavLinks = ({ mobile = false }) => (
    <>
      {['Home', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          className={`nav-link ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''} ${mobile ? 'mobile-link' : ''}`}
          onClick={closeMenu}
        >
          {item}
        </Link>
      ))}
    </>
  );

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Logo />

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <NavLinks />
          <Link to="/contact" className="btn-quote" onClick={closeMenu}>Request a Quote</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLinks mobile />
          <Link to="/contact" className="btn-quote mobile-btn" onClick={closeMenu}>Request a Quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
