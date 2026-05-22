import React from 'react';
import dhawalPhoto from '../assets/dhawal.jpg';

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

                        <div className="about-details-grid">
                            <div className="about-detail-item">
                                <span className="about-detail-label">Role</span>
                                <span className="about-detail-value">Fullstack Developer</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="about-detail-label">Current</span>
                                <span className="about-detail-value">Bigul (Bonanza Portfolio Ltd.)</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="about-detail-label">Location</span>
                                <span className="about-detail-value">Indore, India</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="about-detail-label">Email</span>
                                <span className="about-detail-value">
                                    <a href="mailto:dhawaldeolasi04@gmail.com" className="link-hover">
                                        dhawaldeolasi04@gmail.com
                                    </a>
                                </span>
                            </div>
                            <div className="about-detail-item">
                                <span className="about-detail-label">Phone</span>
                                <span className="about-detail-value">
                                    <a href="tel:+918421158336" className="link-hover">
                                        +91 8421158336
                                    </a>
                                </span>
                            </div>
                        </div>

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
                        <div className="about-photo-wrapper">
                            <div className="about-photo-frame">
                                <img src={dhawalPhoto} alt="Dhawal Deolasi" className="about-photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
