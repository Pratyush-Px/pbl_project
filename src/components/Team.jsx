import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <section id="team" className="section-container">
            <h2 className="section-title gradient-text">Meet the Team</h2>

            <div className="team-grid">
                <div className="team-card glass-card">
                    <div className="role-badge">Project Guide</div>
                    <h3>Dr. Girish Sharma</h3>
                    <p>Department of Computer Engineering</p>
                </div>

                <div className="team-card glass-card">
                    <div className="role-badge">Student Developer</div>
                    <h3>Pratyush</h3>
                    <p>B.Tech Computer Engineering</p>
                    <p className="highlight"></p>
                </div>
            </div>
        </section>
    );
};

export default Team;
