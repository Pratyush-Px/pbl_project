import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo gradient-text">PBL 2026</div>
                <ul className="navbar-links">
                    <li onClick={() => scrollToSection('problem')}>Problem</li>
                    <li onClick={() => scrollToSection('methodology')}>Methodology</li>
                    <li onClick={() => scrollToSection('results')}>Results</li>
                    <li onClick={() => scrollToSection('team')}>Team</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
