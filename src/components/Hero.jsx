import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="badge-container">
                    <span className="hero-badge">LedgerLens AI</span>
                </div>
                <h1 className="hero-title">
                    Invoice vs Purchase Order <br />
                    <span className="gradient-text">Validation System</span>
                </h1>
                <p className="hero-description">
                    Automating financial compliance with advanced Optical Character Recognition
                    and intelligent document matching algorithms to detect discrepancies instantly.
                </p>
            </div>
            <div className="hero-background-glow"></div>
        </section>
    );
};

export default Hero;
