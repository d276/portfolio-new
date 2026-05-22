import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="subtitle-badge">01. About Me</span>
                    <h2 className="section-title">My Journey & Expertise</h2>
                </div>
                
                <div className="about-grid">
                    <div className="about-text-content reveal-left active">
                        <h3>Passionate about crafting clean, maintainable, and high-performance code.</h3>
                        <p>
                            With 4 years in the software industry, I have navigated various domains, with a particular focus on <strong>Fintech, Healthcare, and E-Governance</strong>. My development philosophy revolves around building scalable frontend architectures, optimized data flows, and fluid user experiences.
                        </p>
                        <p>
                            I specialize in modular folder structures, state-management frameworks (Zustand, Redux, Redux Saga), real-time streaming data, and securing systems with Keycloak and Role-Based Access Controls (RBAC).
                        </p>
                        
                        <div className="metrics-grid">
                            <div className="metric-card">
                                <span className="metric-num">4+</span>
                                <span className="metric-label">Years of Experience</span>
                            </div>
                            <div className="metric-card">
                                <span className="metric-num">10+</span>
                                <span className="metric-label">Projects Completed</span>
                            </div>
                            <div className="metric-card">
                                <span className="metric-num">90%+</span>
                                <span className="metric-label">Lighthouse Performance</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-info-panel reveal-right active">
                        <div className="info-card">
                            <h4>Quick Details</h4>
                            <ul className="info-list">
                                <li>
                                    <span className="info-label">Role:</span>
                                    <span className="info-value">Fullstack Developer</span>
                                </li>
                                <li>
                                    <span className="info-label">Current:</span>
                                    <span className="info-value">Bigul (Bonanza Portfolio Ltd.)</span>
                                </li>
                                <li>
                                    <span className="info-label">Location:</span>
                                    <span className="info-value">Indore, India</span>
                                </li>
                                <li>
                                    <span className="info-label">Email:</span>
                                    <span className="info-value">
                                        <a href="mailto:dhawaldeolasi04@gmail.com" className="link-hover">
                                            dhawaldeolasi04@gmail.com
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span className="info-label">Phone:</span>
                                    <span className="info-value">
                                        <a href="tel:+918421158336" className="link-hover">
                                            +91 8421158336
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
